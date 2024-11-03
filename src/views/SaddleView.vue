<template>
  <div class="saddle-page-container">
    <div class="saddle-page">
      <div class="guess-saddle-container">
        <h2>Guess the Saddle</h2>
        
        <!-- Saddle image based on the day with border -->
        <div class="saddle-image-container">
          <img :src="dailySaddleImage" alt="Saddle of the Day" class="saddle-image" />
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
        <div v-else class="correct-message">
          🎉 Congratulations! You've guessed today's saddle: {{ correctDino }}! 🎉
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
import saddleList from '@/data/saddleList';

export default {
  name: 'SaddleView',
  data() {
    return {
      searchTerm: '',
      saddles: saddleList,
      correctDino: null,
      isCorrectGuess: false,
      guesses: [],
      dailyDateKey: this.getDateKey(), // Generate the date key on initialization
    };
  },
  computed: {
    dailySaddleImage() {
      return this.getSaddleImage(this.correctDino);
    },
    filteredDinosaurs() {
      return this.saddles
        .map(saddle => saddle.replace('_Saddle.png.jpg', ''))
        .filter(dino => 
          dino.toLowerCase().includes(this.searchTerm.toLowerCase()) && 
          !this.guesses.includes(dino)
        );
    },
  },
  methods: {
    getDailyDino() {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      const index = dayOfYear % this.saddles.length;
      return this.saddles[index].replace('_Saddle.png.jpg', '');
    },
    getDateKey() {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    },
    checkDinoGuess(dino) {
      this.isCorrectGuess = dino === this.correctDino;

      if (!this.guesses.includes(dino)) {
        this.guesses.unshift(dino);
      }

      this.searchTerm = '';

      if (this.isCorrectGuess) {
        this.saveState(); // Save the state when guessed correctly
      }
    },
    submitTopSuggestion() {
      if (this.filteredDinosaurs.length > 0) {
        this.checkDinoGuess(this.filteredDinosaurs[0]);
      }
    },
    getSaddleImage(dinoName) {
      try {
        return require(`@/assets/saddle_images/${dinoName}_Saddle.png.jpg`);
      } catch (e) {
        return require('@/assets/saddle_images/default.png');
      }
    },
    saveState() {
      const state = {
        isCorrectGuess: this.isCorrectGuess,
        guesses: this.guesses,
      };
      localStorage.setItem(`saddleGuessState-${this.dailyDateKey}`, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(`saddleGuessState-${this.dailyDateKey}`));
      if (savedState) {
        this.isCorrectGuess = savedState.isCorrectGuess || false;
        this.guesses = savedState.guesses || [];
      } else {
        this.resetGame(); // If no state for today, reset the game
      }
    },
    resetGame() {
      this.isCorrectGuess = false;
      this.guesses = [];
      this.saveState(); // Save the reset state for the new day
    },
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    if (localStorage.getItem(`saddleGuessState-${this.dailyDateKey}`)) {
      this.loadState();
    } else {
      this.resetGame();
    }
  },
};
</script>

<style scoped>
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
}

.saddle-page h2 {
  font-size: 24px;
  color: #ffffff;
  font-family: 'Posterama', sans-serif; /* Apply Posterama font only to the heading */
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
  border: 3px solid #ffffff;
  border-radius: 8px;
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

.saddle-table {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-collapse: collapse;
}

.saddle-table th {
  background-color: #ffffff;
  color: #333;
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
</style>
