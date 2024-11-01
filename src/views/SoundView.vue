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
        🎉Congratulations! You've guessed today's sound: {{ correctDino }}!🎉
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
      this.isCorrectGuess = dino === this.correctDino;

      if (!this.guesses.includes(dino)) {
        this.guesses.unshift(dino);
        
        if (!this.isCorrectGuess) {
          this.incorrectGuesses += 1;
          this.updateHint();
        }
      }
      
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
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #4b7a97;
  border-radius: 8px;
}

.sound-page h2 {
  font-size: 24px;
  color: #ffffff;
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
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
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
  width: 50px; /* Adjust this for your preferred size */
  height: 50px; /* Adjust this for your preferred size */
  margin-top: 10px; /* Space above the image */
}
</style>
