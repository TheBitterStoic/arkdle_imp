<template>
  <div class="dino-page-container">
    <div class="dino-page">
      <!-- Guess Today's Dino Section -->
      <div class="guess-dino-container">
        <h2>Guess Today's Dino</h2>

        <!-- Show input and prompt if correct guess hasn't been made -->
        <div v-if="!isCorrectGuess" class="input-message-container">
          <p>Type any Dino to begin</p>
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Type a dinosaur name..."
            class="dino-input"
            @keydown.enter="submitTopSuggestion"
          />
        </div>

        <!-- Success message overlay when the correct dino is guessed -->
        <div v-else class="correct-message">
          🎉 Congratulations! You've guessed today's dino: {{ correctDino }}! 🎉
        </div>

        <!-- Dropdown List for Filtered Dinosaurs -->
        <ul v-if="!isCorrectGuess && searchTerm && filteredDinosaurs.length" class="dropdown">
          <li v-for="dino in filteredDinosaurs" :key="dino" @click="checkDinoGuess(dino)">
            <img :src="getDinoImage(dino)" :alt="dino" class="dino-image" />
            {{ dino }}
          </li>
        </ul>
        <p v-if="searchTerm && !filteredDinosaurs.length" class="no-match">No matches found</p>
      </div>

      <!-- Table Section to Show Guess vs. Correct Dino -->
      <div class="table-container">
        <table v-if="guesses.length" class="dino-table">
          <thead>
            <tr>
              <th class="table-header">Dino</th>
              <th class="table-header">DLC's</th>
              <th class="table-header">Release Date</th>
              <th class="table-header">Temperament</th>
              <th class="table-header">Diet</th>
              <th class="table-header">Size</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="guess in guesses" :key="guess.name">
              <td class="image-cell">
                <img :src="getDinoImage(guess.name)" :alt="guess.name" class="table-image" />
              </td>
              <td :class="getCellClass(guess, 'dlc')">{{ guess.dlc }}</td>
              <td :class="getCellClass(guess, 'releaseDate')">{{ guess.releaseDate }}</td>
              <td :class="getCellClass(guess, 'temperament')">{{ guess.temperament }}</td>
              <td :class="getCellClass(guess, 'diet')">{{ guess.diet }}</td>
              <td :class="getCellClass(guess, 'size')">{{ guess.size }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import dinoList from '@/data/dinoList';
import dinoData from '@/data/dinoData.js';

export default {
  name: 'DinoView',
  data() {
    return {
      searchTerm: '',
      dinosaurs: dinoList,
      correctDino: null,
      isCorrectGuess: false,
      guesses: [],
    };
  },
  computed: {
    filteredDinosaurs() {
      return this.dinosaurs
        .filter(dino =>
          dino.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
          !this.guesses.some(guess => guess.name === dino)
        );
    }
  },
  methods: {
    getDailyDino() {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);

      const index = dayOfYear % this.dinosaurs.length;
      return this.dinosaurs[index];
    },
    checkDinoGuess(dino) {
      this.isCorrectGuess = dino === this.correctDino;

      const guessedDino = dinoData.find(d => d.name === dino);
      if (guessedDino && !this.guesses.some(guess => guess.name === guessedDino.name)) {
        this.guesses.unshift(guessedDino);
        this.saveState();
      }

      if (this.isCorrectGuess) {
        this.saveState();
      }

      this.searchTerm = '';
    },
    submitTopSuggestion() {
      if (this.filteredDinosaurs.length > 0) {
        this.checkDinoGuess(this.filteredDinosaurs[0]);
      }
    },
    getDinoImage(dinoName) {
      try {
        return require(`@/assets/dino_images/${dinoName}.png`);
      } catch (e) {
        return require('@/assets/dino_images/Araneo.png');
      }
    },
    getCellClass(guess, attribute) {
      if (!this.correctDinoData) return '';
      return guess[attribute] === this.correctDinoData[attribute] ? 'cell-correct' : 'cell-incorrect';
    },
    saveState() {
      const state = {
        isCorrectGuess: this.isCorrectGuess,
        guesses: this.guesses,
      };
      localStorage.setItem('dinoGuessState', JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem('dinoGuessState'));
      if (savedState) {
        this.isCorrectGuess = savedState.isCorrectGuess;
        this.guesses = savedState.guesses || [];
      }
    },
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    this.correctDinoData = dinoData.find(d => d.name === this.correctDino);
    this.loadState();
  },
  watch: {
    guesses: 'saveState',
    isCorrectGuess: 'saveState',
  },
};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  font-family: Arial, sans-serif;
}

.dino-page-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #285c74;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.dino-page {
  padding: 20px;
}

.guess-dino-container {
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #285c74;
  border-radius: 8px;
  max-width: 80%;
  margin: 0 auto;
}

.guess-dino-container h2 {
  margin: 0;
  font-size: 24px;
  color: #ffffff;
}

.guess-dino-container p {
  margin: 5px 0 10px;
  font-size: 16px;
  color: #ffffff;
}

.input-message-container {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.dino-input {
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
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

.dropdown {
  list-style-type: none;
  padding: 0;
  margin: 10px auto 0;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: left;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #f5f5f8; /* Light cyan background for each item */
  color: #000000; /* Dark teal text color */
}

.dropdown li:hover {
  background-color: #f0f0f0;
}

.dino-image {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}

.dino-table {
  width: 100%;
  max-width: 700px;
  margin-top: 20px;
  border-collapse: collapse;
}

.dino-table th {
  background-color: #ffffff;
  color: #333;
  padding: 8px;
  border: 1px solid #ddd;
}

.dino-table td, .image-cell {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

.image-cell {
  background-color: #ffffff;
}

.cell-correct {
  background-color: #1a8b1e;
}

.cell-incorrect {
  background-color: #b6202f;
}
.table-image {
  width: 40px; /* Adjust this to control image width */
  height: 40px; /* Adjust this to control image height */
  object-fit: contain; /* Ensures the image scales correctly */
  border-radius: 4px;
}
</style>
