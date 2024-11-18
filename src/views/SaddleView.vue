<template>
  <div class="saddle-page-container">
    <!-- "?" Help Button -->
    <button class="help-button" @click="showPopup = true">?</button>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <button class="close-button" @click="showPopup = false">X</button>
        <h3>How to Play</h3>
        <p>
          Every day at 01:00 GMT, a random saddle from Ark is chosen for you to guess.
        </p>
        <p>
          <strong>Getting Started:</strong><br />
          Type the name of any dinosaur to begin. A list of your guesses will appear.
        </p>
        <p>
          <strong>Hints:</strong><br />
          After certain numbers of incorrect guesses, hints will be revealed to help you.
        </p>
        <p>
          If you notice any errors or have feature suggestions, please email me at
          <a href="mailto:arkdlefeedback@gmail.com">arkdlefeedback@gmail.com</a>.
        </p>
        <p>Happy guessing!</p>
      </div>
    </div>

    <div class="saddle-page">
      <div class="guess-saddle-container">
        <h2>Guess the Saddle</h2>

        <!-- Saddle image based on the day with border -->
        <div class="saddle-image-container">
          <img :src="dailySaddleImage" alt="Saddle of the Day" class="saddle-image" />
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

        <!-- Input and Prompt -->
        <div v-if="!isCorrectGuess" class="input-message-container">
          <p class="begin-text">Type any Dino to begin</p>
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Type a dinosaur name..."
            class="saddle-input"
            @keydown.enter="submitTopSuggestion"
          />
        </div>

        <!-- Success Message -->
        <div v-else class="correct-message" ref="victoryMessage">
          🎉 Congratulations! You've guessed today's saddle: {{ correctDino }} in {{ guesses.length }} guesses! 🎉
          <img :src="getDinoImage(correctDino)" alt="Dinosaur" class="victory-image" />
        </div>

        <!-- Next Button -->
        <div v-if="isCorrectGuess" class="next-button-container">
          <button class="rect-button" @click="goToSoundPage">
            NEXT
          </button>
        </div>

        <!-- Dropdown for Filtered Dinosaurs -->
        <ul v-if="searchTerm && filteredDinosaurs.length && !isCorrectGuess" class="dropdown">
          <li v-for="dino in filteredDinosaurs" :key="dino" @click="checkDinoGuess(dino)">
            {{ dino }}
          </li>
        </ul>
        <p v-if="searchTerm && !filteredDinosaurs.length" class="no-match">No matches found</p>
      </div>

      <!-- Guessed Dino Table -->
      <div class="table-container">
        <table v-if="guesses.length" class="saddle-table">
          <thead>
            <tr>
              <th class="table-header">Guessed Dino</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="guess in guesses"
              :key="guess"
              :class="{ 'row-correct': guess === correctDino, 'row-incorrect': guess !== correctDino }"
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
import saddleList from '@/data/saddleList';
import dinoData from '@/data/dinoData'; // Import the dino data

export default {
  name: 'SaddleView',
  data() {
    return {
      searchTerm: '',
      saddles: saddleList, // saddleList is an object
      correctDino: null,
      isCorrectGuess: false,
      guesses: [],
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
      showPopup: false, // Add this line to manage the popup visibility
    };
  },
  computed: {
    dailySaddleImage() {
      const obfuscatedKey = Object.keys(this.saddles).find(
        (key) => this.saddles[key].replace(/_Saddle\.png$/i, '') === this.correctDino
      );

      if (!obfuscatedKey) {
        console.error('No matching obfuscated key found for the correct dino!');
      }

      return obfuscatedKey ? this.getSaddleImage(obfuscatedKey) : this.getSaddleImage('default');
    },
    filteredDinosaurs() {
      const dinoNames = Object.values(this.saddles).map(dino =>
        dino.replace(/_Saddle\.png$/i, '') // Clean up names
      );
      return dinoNames.filter(
        (dino) =>
          dino.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          !this.guesses.includes(dino)
      );
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
      const diff = now - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay) + 20;

      const keys = Object.keys(this.saddles);
      if (keys.length === 0) {
        console.error('saddleList is empty!');
        return 'Unknown_Saddle';
      }

      const keyForToday = keys[dayOfYear % keys.length];

      return this.saddles[keyForToday].replace(/_Saddle\.png$/i, ''); // Clean up the name
    },
    goToSoundPage() {
    this.$router.push('/sound'); // Adjust the route name to match your router configuration
  },
    getDateKey() {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
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

      if (this.isCorrectGuess) {
        this.saveState();
        this.scrollToVictoryMessage();
      }
    },
    submitTopSuggestion() {
      if (this.filteredDinosaurs.length > 0) {
        this.checkDinoGuess(this.filteredDinosaurs[0]);
      }
    },
    getSaddleImage(obfuscatedKey) {
      try {
        // Use the obfuscated key to construct the image path
        return require(`@/assets/saddle_images/${obfuscatedKey}.jpg`);
      } catch (e) {
        console.error(`Image not found for key: ${obfuscatedKey}`, e); // Log the missing key
        return require('@/assets/saddle_images/default.png');
      }
    },
    getDinoImage(dinoName) {
      try {
        return require(`@/assets/dino_images/${dinoName}.png`);
      } catch (e) {
        return require('@/assets/dino_images/default.png');
      }
    },
    saveState() {
      const state = {
        isCorrectGuess: this.isCorrectGuess,
        guesses: this.guesses,
        incorrectGuesses: this.incorrectGuesses,
        hints: this.hints,
      };
      localStorage.setItem(`saddleGuessState-${this.dailyDateKey}`, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(`saddleGuessState-${this.dailyDateKey}`));
      if (savedState) {
        this.isCorrectGuess = savedState.isCorrectGuess || false;
        this.guesses = savedState.guesses || [];
        this.incorrectGuesses = savedState.incorrectGuesses || 0;
        this.hints = savedState.hints || {
          biome: null,
          traversal: null,
          size: null,
          diet: null,
          temperament: null,
        };
      } else {
        this.resetGame();
      }
    },
    resetGame() {
      this.isCorrectGuess = false;
      this.guesses = [];
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
    scrollToVictoryMessage() {
      this.$nextTick(() => {
        if (this.$refs.victoryMessage) {
          const element = this.$refs.victoryMessage;
          const elementRect = element.getBoundingClientRect();
          const elementTop = elementRect.top + window.pageYOffset;
          const elementHeight = elementRect.height;
          const viewportHeight = window.innerHeight;

          // Calculate the offset to scroll the element to the vertical center
          const offset = elementTop - ((viewportHeight - elementHeight) / 2);

          window.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        }
      });
    },
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    if (localStorage.getItem(`saddleGuessState-${this.dailyDateKey}`)) {
      this.loadState();
      if (this.isCorrectGuess) {
        this.scrollToVictoryMessage();
      }
    } else {
      this.resetGame();
    }
  },
};
</script>



<style scoped>
/* Existing styles */

.saddle-page-container {
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

.saddle-page-container::before {
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

.saddle-page-container > * {
  position: relative;
  z-index: 2;
}

.saddle-page h2 {
  font-size: 24px;
  color: #88e9ff;
  font-family: 'Posterama', sans-serif;
}

.saddle-input {
  padding: 10px;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  font-size: 16px;
}

.saddle-image-container {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.saddle-image {
  width: 200px;
  height: auto;
  border: 3px solid #B8860B;
  border-radius: 8px;
  background: url('@/assets/saddleback.jpg');
  background-position: center;
  background-size: cover;
}

.hint-container {
  text-align: center;
  margin: 10px 0;
}

.hints-table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 100%;
  max-width: 400px;
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

.begin-text {
  color: #ffffff;
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
  height: 200px; /* Adjust height as needed */
  margin-top: 10px;
}

.table-container {
  margin-top: 20px;
}

.saddle-table {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-collapse: collapse;
}

.saddle-table th {
  color: #88e9ff;
  padding: 8px;
  border: 1px solid #ddd;
}

.saddle-table td {
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

/* Text Color Indicators */
.green-text {
  color: #1a8b1e;
  font-weight: bold;
}

.red-text {
  color: #b6202f;
  font-weight: bold;
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
  margin-top: 20px; /* Add some spacing */
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
@media (max-width: 600px) {
  .saddle-page-container {
    max-width: 80%; /* Allow the container to take up more space */
    padding: 10px; /* Reduce padding */
  }

  .saddle-input {
    font-size: 14px; /* Decrease font size for input */
    padding: 8px; /* Reduce padding in the input field */
  }

  .saddle-image {
    width: 150px; /* Reduce the width of the saddle image */
  }

  .saddle-table {
    max-width: 80%; /* Allow the table to take the full width */
  }

  .saddle-table th, .saddle-table td {
    padding: 6px; /* Reduce padding in table cells */
    font-size: 14px; /* Decrease font size for table text */
  }

  .correct-message {
    font-size: 14px; /* Decrease font size for the success message */
    padding: 8px; /* Reduce padding in the success message */
  }

  .victory-image {
    height: 150px; /* Adjust height for smaller screens */
  }
}
@media (max-width: 440px) {
  .saddle-page-container {
    max-width: 90%; /* Full width for smaller screens */
    padding: 5px; /* Minimal padding */
  }

  .saddle-page h2 {
    font-size: 20px; /* Adjust heading size */
  }

  .saddle-input {
    max-width: 80%;
    font-size: 12px; /* Smaller input font size */
    padding: 6px; /* Reduce padding */
  }

  .saddle-image {
    width: 120px; /* Smaller saddle image */
  }

  .hint-text {
    font-size: 16px; /* Adjust hint text size */
    letter-spacing: 1px; /* Reduce letter spacing */
  }

  .dropdown {
    max-width: 90%; /* Full width dropdown */
    font-size: 12px; /* Smaller text */
  }

  .dropdown li {
    padding: 8px; /* Reduce padding */
    font-size: 12px; /* Adjust font size */
  }

  .correct-message {
    font-size: 12px; /* Reduce font size */
    padding: 8px; /* Adjust padding */
  }

  .victory-image {
    height: 120px; /* Adjust height for smaller screens */
  }

  .table-container {
    margin-top: 10px; /* Reduce spacing above the table */
  }

  .saddle-table {
    width: 100%; /* Allow the table to stretch full width */
  }

  .saddle-table th, .saddle-table td {
    padding: 5px; /* Minimal padding in table cells */
    font-size: 12px; /* Smaller table text */
  }

  .no-match {
    font-size: 12px; /* Adjust font size for no match text */
  }

  .begin-text {
    font-size: 12px; /* Adjust font size for begin text */
  }

  .row-correct {
    font-size: 12px; /* Adjust text size for correct row */
  }

  .row-incorrect {
    font-size: 12px; /* Adjust text size for incorrect row */
  }
}
</style>
