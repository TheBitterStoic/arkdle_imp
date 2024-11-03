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
          <img :src="getDinoImage(correctDino)" alt="Dinosaur" class="victory-image" />
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
              <th class="table-header">Image</th>
              <th class="table-header">Dino Name</th>
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
              <td :class="{'cell-correct': guess.name === correctDino, 'cell-incorrect': guess.name !== correctDino}">
                {{ guess.name }}
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
  max-width: 750px;
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
.dino-page-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit; /* Use the same background */
  border-radius: inherit;
  filter: contrast(2 00%) brightness(0.9) blur(1px); /* Adds a noise effect */
  mix-blend-mode: overlay;
  pointer-events: none;
  opacity: 0.1;
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
  text-align: center; /* Center the table content */
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
@media (max-width: 765px) {
  /* Container adjustments for mobile */
  .dino-page-container {
    padding: 10px;
    box-shadow: none;
    border-radius: 0;
  }

  .dino-page {
    padding: 10px;
  }

  .guess-dino-container {
    padding: 10px;
    max-width: 100%;
  }

  .dropdown {
    width: 100%;
    max-width: 100%;
  }

  /* Adjust input field */
  .dino-input {
    font-size: 14px;
    padding: 8px;
  }

  /* Victory message adjustments */
  .correct-message {
    font-size: 14px;
    padding: 8px;
  }

  /* Table adjustments for mobile */
  .dino-table {
    font-size: 14px;
    width: 100%;
    max-width: 100%;
  }

  .dino-table th, .dino-table td, .image-cell {
    padding: 6px;
  }

  .table-image {
    width: 30px; /* Adjusted image width for smaller screens */
    height: 30px;
  }

  /* Drop-down list items */
  .dropdown li {
    padding: 8px;
    font-size: 14px;
  }

  /* Victory image size adjustment */
  .victory-image {
    max-width: 100px;
    max-height: 100px;
  }
}
@media (max-width: 625px) {
  /* Further container adjustments for smaller screens */
  .dino-page-container {
    padding: 5px;
  }

  .guess-dino-container {
    padding: 8px;
    max-width: 100%;
  }

  /* Input field and dropdown adjustments */
  .dino-input {
    font-size: 12px;
    padding: 6px;
  }

  .dropdown li {
    padding: 6px;
    font-size: 12px;
  }

  /* Victory message adjustments */
  .correct-message {
    font-size: 12px;
    padding: 6px;
  }

  /* Table adjustments for very small screens */
  .dino-table {
    font-size: 12px;
    max-width: 100%;
  }

  .dino-table th, .dino-table td, .image-cell {
    padding: 4px;
  }

  /* Adjust image sizes to fit better on small screens */
  .table-image {
    width: 25px; /* Smaller image width for very small screens */
    height: 25px;
  }

  /* Victory image size adjustment */
  .victory-image {
    max-width: 80px;
    max-height: 80px;
  }
}
@media (max-width: 521px) {
  /* Further container adjustments for ultra-small screens */
  .dino-page-container {
    padding: 4px;
  }

  .guess-dino-container {
    padding: 6px;
    max-width: 100%;
  }

  /* Input field and dropdown adjustments */
  .dino-input {
    font-size: 10px;
    padding: 5px;
  }

  .dropdown li {
    padding: 5px;
    font-size: 10px;
  }

  /* Victory message adjustments */
  .correct-message {
    font-size: 10px;
    padding: 5px;
  }

  /* Table adjustments for ultra-small screens */
  .dino-table {
    font-size: 10px;
    max-width: 100%;
  }

  .dino-table th, .dino-table td, .image-cell {
    padding: 3px;
  }

  /* Adjust image sizes to fit better on ultra-small screens */
  .table-image {
    width: 20px; /* Smaller image width for ultra-small screens */
    height: 20px;
  }

  /* Victory image size adjustment */
  .victory-image {
    max-width: 70px;
    max-height: 70px;
  }
}
@media (max-width: 433px) {
  /* Further container adjustments for very compact screens */
  .dino-page-container {
    padding: 3px;
  }

  .guess-dino-container {
    padding: 5px;
    max-width: 100%;
  }

  /* Input field and dropdown adjustments */
  .dino-input {
    font-size: 9px;
    padding: 4px;
  }

  .dropdown li {
    padding: 4px;
    font-size: 9px;
  }

  /* Victory message adjustments */
  .correct-message {
    font-size: 9px;
    padding: 4px;
  }

  /* Table adjustments for very compact screens */
  .dino-table {
    font-size: 9px;
    max-width: 100%;
  }

  .dino-table th, .dino-table td, .image-cell {
    padding: 2px;
  }

  /* Adjust image sizes to fit better on very compact screens */
  .table-image {
    width: 18px; /* Smaller image width for very compact screens */
    height: 18px;
  }

  /* Victory image size adjustment */
  .victory-image {
    max-width: 60px;
    max-height: 60px;
  }
}
@media (max-width: 395px) {
  /* Container adjustments for ultra-compact screens */
  .dino-page-container {
    padding: 2px;
  }

  .guess-dino-container {
    padding: 4px;
    max-width: 100%;
  }

  /* Input field and dropdown adjustments */
  .dino-input {
    font-size: 8px;
    padding: 3px;
  }

  .dropdown li {
    padding: 3px;
    font-size: 8px;
  }

  /* Victory message adjustments */
  .correct-message {
    font-size: 8px;
    padding: 3px;
  }

  /* Table adjustments for ultra-compact screens */
  .dino-table {
    font-size: 8px;
    max-width: 100%;
  }

  .dino-table th, .dino-table td, .image-cell {
    padding: 1px;
  }

  /* Adjust image sizes to fit better on ultra-compact screens */
  .table-image {
    width: 16px; /* Smaller image width for ultra-compact screens */
    height: 16px;
  }

  /* Victory image size adjustment */
  .victory-image {
    max-width: 50px;
    max-height: 50px;
  }
}

</style>
