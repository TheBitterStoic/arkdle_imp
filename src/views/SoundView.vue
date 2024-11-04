<template>
  <div class="sound-page-container">
    <div class="sound-page">
      <h2>Guess the Sound</h2>

      <!-- Sound prompt with play button -->
      <div class="sound-prompt">
        <button @click="playSound" class="play-button">🔊 Play Sound</button>
      </div>

      <!-- Input and prompt if the guess is incorrect -->
      <div v-if="!isCorrectGuess" class="input-message-container">
        <p class="begin-text">Type any Dino to begin</p>
        <p class="hint-text" v-if="incorrectGuesses >= 5">{{ revealedHint }}</p>
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
        🎉 Congratulations! You've guessed today's sound: {{ correctDino }}! 🎉
        <img :src="getDinoImage(correctDino)" alt="Dinosaur" class="victory-image" />
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
import soundList from '@/data/soundList';
import dinoList from '@/data/dinoList'; // Import dino list

export default {
  name: 'SoundView',
  data() {
    return {
      searchTerm: '',
      soundFiles: soundList,
      correctDino: null,
      isCorrectGuess: false,
      guesses: [],
      sound: null,
      incorrectGuesses: 0,
      revealedHint: '',
      revealedIndices: new Set(),
      dailyDateKey: this.getDateKey(),
    };
  },
  computed: {
    filteredDinosaurs() {
      return this.soundFiles
        .map(file => file.replace('sound.ogg', ''))
        .filter(dino => 
          dino.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          !this.guesses.includes(dino)
        );
    },
    formattedHint() {
      return this.revealedHint.split('').join(' '); // Format the hint for display
    }
  },
  methods: {
    getDailyDino() {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      const index = dayOfYear % this.soundFiles.length;
      return this.soundFiles[index].replace('sound.ogg', '');
    },
    getDinoImage(dinoName) {
      try {
        return require(`@/assets/dino_images/${dinoName}.png`); // Adjust the path as necessary
      } catch (e) {
        return require('@/assets/dino_images/default.png'); // Default image if the specific dino image is not found
      }
    },
    playSound() {
      if (this.sound) {
        this.sound.play();
      }
    },
    checkDinoGuess(dino) {
      // Prevent further guesses after reaching a limit of incorrect guesses
      if (this.incorrectGuesses >= 10) {
        alert("You've reached the maximum number of incorrect guesses.");
        return;
      }

      this.isCorrectGuess = dino === this.correctDino;

      if (!this.guesses.includes(dino)) {
        this.guesses.unshift(dino);
        
        if (!this.isCorrectGuess) {
          this.incorrectGuesses += 1;
          this.updateHint(); // Update the hint if the guess is incorrect
        }
      }
      
      // Clear the search term and save the state
      this.searchTerm = '';
      this.saveState(); // Save state after checking guess
    },
    submitTopSuggestion() {
      if (this.filteredDinosaurs.length > 0) {
        this.checkDinoGuess(this.filteredDinosaurs[0]);
      }
    },
    updateHint() {
      if (this.incorrectGuesses >= 5) {
        const revealLetters = Math.floor(this.incorrectGuesses / 2); 
        let hintArray = this.revealedHint.split('');

        while (this.revealedIndices.size < revealLetters) {
          const randomIndex = Math.floor(Math.random() * this.correctDino.length);

          if (!this.revealedIndices.has(randomIndex)) {
            this.revealedIndices.add(randomIndex);
            hintArray[randomIndex] = this.correctDino[randomIndex];
          }
        }
        this.revealedHint = hintArray.join('');
      }
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
        revealedHint: this.revealedHint,
        revealedIndices: Array.from(this.revealedIndices),
      };
      localStorage.setItem(`soundGuessState-${this.dailyDateKey}`, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(`soundGuessState-${this.dailyDateKey}`));
      if (savedState) {
        this.guesses = savedState.guesses || [];
        this.isCorrectGuess = savedState.isCorrectGuess || false;
        this.incorrectGuesses = savedState.incorrectGuesses || 0;
        this.revealedHint = savedState.revealedHint || '_'.repeat(this.correctDino.length);
        this.revealedIndices = new Set(savedState.revealedIndices || []);
      }
    },
    resetState() {
      this.guesses = [];
      this.isCorrectGuess = false;
      this.incorrectGuesses = 0;
      this.revealedHint = '_'.repeat(this.correctDino.length);
      this.revealedIndices.clear();
      this.saveState();
    }
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    this.revealedHint = '_'.repeat(this.correctDino.length); // Initialize hint with underscores
    this.sound = new Audio(require(`@/assets/sound_files/${this.correctDino}sound.ogg`));

    // Load state if the date matches today, otherwise reset
    if (localStorage.getItem(`soundGuessState-${this.dailyDateKey}`)) {
      this.loadState();
    } else {
      this.resetState();
    }
  },
};
</script>

<style scoped>
.sound-page-container {
  max-width: 500px; /* Set the maximum width */
  margin: 0 auto; /* Center the container */
  padding: 20px; /* Add padding */
  background: radial-gradient(
    circle, 
    #285c74 60%, 
    #1e4c5d 90%, 
    #12333d 100%
  ); /* Background gradient */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Shadow effect */
  position: relative; /* Required for absolute positioning of overlay */
}

.sound-page-container::before {
  content: ''; /* Empty content for the overlay */
  position: absolute; /* Position it absolutely */
  top: 0; /* Align to top */
  left: 0; /* Align to left */
  right: 0; /* Align to right */
  bottom: 0; /* Align to bottom */
  background-image: url('@/assets/overlay.jpg'); /* Overlay image path */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the overlay image */
  opacity: 0.2; /* Set the opacity for the overlay */
  z-index: 1; /* Place behind other content */
}

.sound-page-container > * {
  position: relative; /* Ensure content appears above overlay */
  z-index: 2; /* Ensure it is above the overlay */
}

.sound-page h2 {
  font-size: 24px;
  color: #ffffff;
  font-family: 'Posterama', sans-serif; /* Apply Posterama font only to the heading */
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

.begin-text, .hint-text {
  color: #ffffff;
  text-align: center;
}

.hint-text {
  font-size: 20px;
  margin-top: 10px;
  letter-spacing: 2px;
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
  background-color: #f5f5f8; /* Light cyan background for each item */
  color: #000000; /* Dark teal text color */
}

.no-match {
  color: #ffffff;
  text-align: center;
}

.correct-message {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align content */
  padding: 10px;
  font-size: 16px;
  background: url('@/assets/ArkMenuThree.png'); /* Background image */
  background-position: center; /* Center the background image */
  background-size: cover; /* Ensure the background covers the entire container */
  color: white;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #B8860B; /* Dark gold border */
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

.victory-image {
  width: 200px; /* Adjust this for your preferred size */
  height: 200px; /* Adjust this for your preferred size */
  margin-top: 10px; /* Space above the image */
}

@media (max-width: 630px) {
  .sound-page-container {
    max-width: 80%; /* Allow the container to take up more width */
    padding: 10px; /* Reduce padding for smaller screens */
  }

  .sound-page h2 {
    font-size: 20px; /* Decrease the font size for the heading */
  }

  .sound-input {
    max-width: 80%; /* Allow the input to take the full width */
    font-size: 14px; /* Decrease the font size */
  }

  .play-button {
    font-size: 16px; /* Decrease the button font size */
    padding: 8px; /* Reduce padding */
  }

  .begin-text, .hint-text {
    font-size: 16px; /* Decrease font size for hints and prompts */
  }

  .hint-text {
    font-size: 18px; /* Maintain a slightly larger size for the hint text */
  }

  .dropdown {
    max-width: 80%; /* Ensure dropdown takes full width */
  }

  .correct-message {
    padding: 8px; /* Reduce padding */
    font-size: 14px; /* Decrease font size */
  }

  .victory-image {
    width: 150px; /* Adjust image size for smaller screens */
    height: auto; /* Maintain aspect ratio */
  }

  .sound-table {
    max-width: 80%; /* Allow the table to take full width */
    font-size: 14px; /* Decrease font size for table content */
  }

  .sound-table th,
  .sound-table td {
    padding: 6px; /* Reduce padding in table cells */
  }
}
</style>
