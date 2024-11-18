<template>
  <div class="sound-page-container">
    <!-- "?" Help Button -->
    <button class="help-button" @click="showPopup = true">?</button>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <button class="close-button" @click="showPopup = false">X</button>
        <h3>How to Play</h3>
        <p>
          Every day at 01:00 GMT, a random dinosaur sound from Ark is chosen for you to guess.
        </p>
        <p>
          <strong>Getting Started:</strong><br />
          Click the "Play Sound" button to hear the sound. Type the name of any dinosaur to begin guessing.
        </p>
        <p>
          <strong>Hints:</strong><br />
          After certain numbers of incorrect guesses, hints will be revealed to help you.
        </p>
        <p>
          If you notice any errors or have feature suggestions, please email us at
          <a href="mailto:arkdlefeedback@gmail.com">arkdlefeedback@gmail.com</a>.
        </p>
        <p>Happy guessing!</p>
      </div>
    </div>

    <div class="sound-page">
      <h2>Guess the Sound</h2>

      <!-- Sound prompt with play button -->
      <div class="sound-prompt">
        <button @click="playSound" class="play-button">🔊 Play Sound</button>
      </div>

      <!-- Hints Table -->
      <div class="hint-container">
        <table class="hints-table">
          <thead>
            <tr>
              <th>Hint</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Biome</td>
              <td>
                <span v-if="hints.biome">{{ hints.biome }}</span>
                <span v-else>{{ hintStatus.biome }}</span>
              </td>
            </tr>
            <tr>
              <td>Traversal</td>
              <td>
                <span v-if="hints.traversal">{{ hints.traversal }}</span>
                <span v-else>{{ hintStatus.traversal }}</span>
              </td>
            </tr>
            <tr>
              <td>Size</td>
              <td>
                <span v-if="hints.size">{{ hints.size }}</span>
                <span v-else>{{ hintStatus.size }}</span>
              </td>
            </tr>
            <tr>
              <td>Diet</td>
              <td>
                <span v-if="hints.diet">{{ hints.diet }}</span>
                <span v-else>{{ hintStatus.diet }}</span>
              </td>
            </tr>
            <tr>
              <td>Temperament</td>
              <td>
                <span v-if="hints.temperament">{{ hints.temperament }}</span>
                <span v-else>{{ hintStatus.temperament }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Input and prompt if the guess is incorrect -->
      <div v-if="!isCorrectGuess" class="input-message-container">
        <p class="begin-text">Type any Dino to begin</p>
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Type a dinosaur name..."
          class="sound-input"
          @keydown.enter="submitTopSuggestion"
        />
      </div>

      <!-- Success message overlay with dinosaur image -->
      <div v-else class="correct-message">
        🎉 Congratulations! You've guessed today's sound: {{ correctDino }} in {{ guesses.length }} guesses! 🎉
        <img :src="getDinoImage(correctDino)" alt="Dinosaur" class="victory-image" />
      </div>

      <!-- Next Button -->
      <div v-if="isCorrectGuess" class="next-button-container">
        <button class="rect-button" @click="goToMapPage">
          NEXT
        </button>
      </div>

      <!-- Dropdown List for Filtered Dinosaurs -->
      <ul v-if="!isCorrectGuess && searchTerm && filteredDinosaurs.length" class="dropdown">
        <li v-for="dino in filteredDinosaurs" :key="dino" @click="checkDinoGuess(dino)">
          {{ dino }}
        </li>
      </ul>
      <p v-if="searchTerm && !filteredDinosaurs.length" class="no-match">No matches found</p>

      <!-- Table for Guess History -->
      <div class="table-container">
        <table v-if="guesses.length" class="sound-table">
          <thead>
            <tr>
              <th class="table-header">Guessed Dino</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="guess in guesses"
              :key="guess"
              :class="{'row-correct': guess === correctDino, 'row-incorrect': guess !== correctDino}"
            >
              <td>{{ guess }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import dinoList from '@/data/dinoList';
import soundList from '@/data/soundList';
import dinoData from '@/data/dinoData'; // Import the dino data

export default {
  name: 'SoundView',
  data() {
    return {
      searchTerm: '',
      soundFiles: soundList,
      dinosaurs: dinoList,
      correctDino: null,
      isCorrectGuess: false,
      guesses: [],
      sound: null,
      incorrectGuesses: 0,
      hints: {
        biome: null,
        traversal: null,
        size: null,
        diet: null,
        temperament: null,
      },
      hintRevealCounts: {
        biome: 1,
        traversal: 3,
        size: 5,
        diet: 7,
        temperament: 9,
      },
      dailyDateKey: this.getDateKey(),
      showPopup: false, // Added to manage popup visibility
    };
  },
  computed: {
    filteredDinosaurs() {
      return this.dinosaurs
        .filter(dino =>
          dino.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          !this.guesses.includes(dino)
        )
        .sort((a, b) => a.localeCompare(b));
    },
    hintStatus() {
      const status = {};
      for (const [key, value] of Object.entries(this.hintRevealCounts)) {
        if (this.hints[key]) {
          status[key] = this.hints[key];
        } else {
          const guessesRemaining = value - this.incorrectGuesses;
          status[key] = guessesRemaining > 0
            ? `Will be revealed in ${guessesRemaining} guess(es)`
            : 'Will be revealed soon';
        }
      }
      return status;
    },
  },
  methods: {
    getDailyDino() {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      const index = dayOfYear % this.soundFiles.length;
      const soundFile = this.soundFiles[index];

      // Updated regex to handle filenames with or without underscores
      return soundFile.replace(/_?sound\.mp3$/i, '');
    },
    goToMapPage() {
    this.$router.push('/map'); // Adjust the route to your MapPage path
  },
    getDinoImage(dinoName) {
      try {
        return require(`@/assets/dino_images/${dinoName}.png`);
      } catch (e) {
        return require('@/assets/dino_images/default.png');
      }
    },
    playSound() {
      if (this.sound) {
        this.sound.play();
      }
    },
    checkDinoGuess(dino) {
      this.isCorrectGuess = dino === this.correctDino;

      if (!this.guesses.includes(dino)) {
        this.guesses.unshift(dino);
        if (!this.isCorrectGuess) {
          this.incorrectGuesses++;
          this.updateHints();
        }

        this.saveState();
      }

      this.searchTerm = '';
    },
    submitTopSuggestion() {
      if (this.filteredDinosaurs.length > 0) {
        this.checkDinoGuess(this.filteredDinosaurs[0]);
      }
    },
    updateHints() {
      // Find the dino data for the correct dinosaur
      const dinoInfo = dinoData.find(dino => dino.name === this.correctDino);

      if (!dinoInfo) {
        console.error('No data found for the correct dinosaur!');
        return;
      }

      // Check if any hints need to be revealed
      for (const [hintKey, revealCount] of Object.entries(this.hintRevealCounts)) {
        if (!this.hints[hintKey] && this.incorrectGuesses >= revealCount) {
          this.hints[hintKey] = dinoInfo[hintKey];
        }
      }

      this.saveState();
    },
    getDateKey() {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    },
    saveState() {
      const state = {
        guesses: this.guesses,
        isCorrectGuess: this.isCorrectGuess,
        incorrectGuesses: this.incorrectGuesses,
        hints: this.hints,
      };
      localStorage.setItem(`soundGuessState-${this.dailyDateKey}`, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(`soundGuessState-${this.dailyDateKey}`));
      if (savedState) {
        this.guesses = savedState.guesses || [];
        this.isCorrectGuess = savedState.isCorrectGuess || false;
        this.incorrectGuesses = savedState.incorrectGuesses || 0;
        this.hints = savedState.hints || {
          biome: null,
          traversal: null,
          size: null,
          diet: null,
          temperament: null,
        };
      } else {
        this.resetState();
      }
    },
    resetState() {
      this.guesses = [];
      this.isCorrectGuess = false;
      this.incorrectGuesses = 0;
      this.hints = {
        biome: null,
        traversal: null,
        size: null,
        diet: null,
        temperament: null,
      };
      this.saveState();
    },
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const index = dayOfYear % this.soundFiles.length;
    const soundFile = this.soundFiles[index];

    try {
      this.sound = new Audio(require(`@/assets/sound_files/${soundFile}`));
    } catch (e) {
      console.error(`Sound file not found for ${this.correctDino}`, e);
      this.sound = null;
    }

    if (localStorage.getItem(`soundGuessState-${this.dailyDateKey}`)) {
      this.loadState();
    } else {
      this.resetState();
    }
  },
};
</script>


<style scoped>
/* Existing styles */

.sound-page-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: radial-gradient(
    circle,
    #285c74 60%,
    #1e4c5d 90%,
    #12333d 100%
  );
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

.sound-page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/overlay.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: 1;
}

.sound-page-container > * {
  position: relative;
  z-index: 2;
}

.sound-page h2 {
  font-size: 24px;
  color: #88e9ff;
  font-family: 'Posterama', sans-serif;
}

.sound-input {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  font-size: 16px;
}

.sound-prompt {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.play-button {
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
}

.begin-text,
.hint-text {
  color: #ffffff;
  text-align: center;
}

.hint-text {
  font-size: 20px;
  margin-top: 10px;
  letter-spacing: 2px;
}

.hints-table {
  margin:  auto;
  border-collapse: collapse;
  width: 100%;
  max-width: 400px;
  margin-bottom: 10px;
}

.hints-table th,
.hints-table td {
  border: 1px solid #ddd;
  padding: 8px;
  color: #ffffff;
}

.hints-table th {
  background-color: #285c74;
}

.hints-table td {
  background-color: #1e4c5d;
}

.dropdown {
  list-style-type: none;
  padding: 0;
  margin: 10px auto 0;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #f5f5f8;
  color: #000000;
}

.no-match {
  color: #ffffff;
  text-align: center;
}

.correct-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  background: url('@/assets/ArkMenuThree.png');
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #B8860B;
}

.victory-image {
  width: auto;
  height: 200px;
  margin-top: 10px;
}

.table-container {
  margin-top: 20px;
}

.sound-table {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-collapse: collapse;
}

.sound-table th {
  background-color: #ffffff;
  color: #333;
  padding: 8px;
  border: 1px solid #ddd;
}

.sound-table td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

.row-correct {
  background-color: #1a8b1e;
}

.row-incorrect {
  background-color: #b6202f;
}
.help-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: url('@/assets/ArkMenuThree.png');
  color: #dbe6e9;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  z-index: 3; /* Ensure it appears above other elements */
}

/* Popup Overlay Styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4; /* Ensure it appears above the help button */
}

/* Popup Content Styles */
.popup-content {
  background-color: #161616;
  color: #e7eef0;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
  font-family: Arial, sans-serif;
  text-align: left;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Close Button Styles */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #b6202f;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Heading Styles */
.popup-content h3 {
  margin-top: 0;
  color: #285c74;
}

/* Paragraph Styles */
.popup-content p {
  margin-bottom: 15px;
}

/* Link Styles */
.popup-content a {
  color: #285c74;
  text-decoration: none;
}

.popup-content a:hover {
  text-decoration: underline;
}
.next-button-container {
  display: flex;
  justify-content: center; /* Center the button horizontally */
  margin-top: 20px; /* Add spacing above the button */
}

.rect-button {
  display: flex;
  align-items: center;
  justify-content: center; /* Center the text */
  width: 110px; /* Button width */
  height: 50px; /* Button height */
  background: linear-gradient(to bottom, #285c74, #1a404e, #285c74); /* Gradient background */
  border-radius: 5px; /* Slightly rounded corners */
  padding: 0; /* Remove padding */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
  cursor: pointer; /* Pointer cursor */
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transitions */
  border: 3px solid #408aa5; /* Border color */
  font-size: 20px; /* Font size */
  color: #88e9ff; /* Text color */
  font-weight: bold; /* Bold text */
  font-family: "Posterama", sans-serif; /* Font family */
  text-align: center; /* Align text */
}

.rect-button:hover {
  /* Hover effect */
  background: linear-gradient(to bottom, #3d88aa, #285c74, #3d88aa);
  border-color: #f5f5f5; /* Change border color on hover */
}

@media (max-width: 630px) {
  .sound-page-container {
    max-width: 80%;
    padding: 10px;
  }

  .sound-page h2 {
    font-size: 20px;
  }

  .sound-input {
    max-width: 80%;
    font-size: 14px;
  }

  .play-button {
    font-size: 16px;
    padding: 8px;
  }

  .begin-text,
  .hint-text {
    font-size: 16px;
  }

  .hint-text {
    font-size: 18px;
  }

  .dropdown {
    max-width: 80%;
  }

  .correct-message {
    padding: 8px;
    font-size: 14px;
  }

  .victory-image {
    width: 150px;
    height: auto;
  }

  .sound-table {
    max-width: 80%;
    font-size: 14px;
  }

  .sound-table th,
  .sound-table td {
    padding: 6px;
  }
}
</style>
