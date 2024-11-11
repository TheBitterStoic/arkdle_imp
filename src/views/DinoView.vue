<template>
  <div class="dino-page-container">
    <div class="dino-page">
      <!-- Guess Today's Dino Section -->
      <div class="guess-dino-container">
        <h2 class="dino-heading">GUESS TODAY'S DINO</h2>

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
          🎉 Congratulations! You've guessed today's dino: {{ correctDino }} in {{ guesses.length }} guesses! 🎉
          <img :src="getDinoImage(correctDino)" alt="Dinosaur" class="victory-image" />
        </div>

        <!-- Dropdown List for Filtered Dinosaurs -->
        <ul v-if="!isCorrectGuess && searchTerm && filteredDinosaurs.length" class="dropdown">
          <li v-for="dino in filteredDinosaurs" :key="dino" @click="checkDinoGuess(dino)">
            {{ dino }}
            <img :src="getDinoImage(dino)" :alt="dino" class="dino-image" />
          </li>
        </ul>
        <p v-if="searchTerm && !filteredDinosaurs.length" class="no-match">No matches found</p>
      </div>

      <!-- Table Section to Show Guess vs. Correct Dino -->
      <div class="table-container">
        <div class="table-scroll"> <!-- Added this wrapper for scrolling -->
          <table v-if="guesses.length" class="dino-table">
            <thead>
              <tr>
                <th class="table-header">IMAGE</th>
                <th class="table-header">NAME</th>
                <th class="table-header">ORIGIN</th>
                <th class="table-header">RELEASE DATE</th>
                <th class="table-header">TEMPERAMENT</th>
                <th class="table-header">DIET</th>
                <th class="table-header">SIZE</th>
                <th class="table-header">BIOME</th>
                <th class="table-header">TRAVERSAL</th>
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
                <td :class="getCellClass(guess, 'biome')">{{ guess.biome }}</td>
                <td :class="getCellClass(guess, 'traversal')">{{ guess.traversal }}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
      dailyDateKey: this.getDateKey(), // Generate the date key on initialization
      correctDinoData: null, // Store the data for the correct dino
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
      const dayOfYear = Math.floor(diff / oneDay) + 1;

      const index = dayOfYear % this.dinosaurs.length;
      return this.dinosaurs[index];
    },
    getDateKey() {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    },
    checkDinoGuess(dino) {
      this.isCorrectGuess = dino === this.correctDino;

      const guessedDino = dinoData.find(d => d.name === dino);
      if (guessedDino && !this.guesses.some(guess => guess.name === guessedDino.name)) {
        this.guesses.unshift(guessedDino);
        this.saveState(); // Save the state whenever a guess is made
      }

      if (this.isCorrectGuess) {
        this.saveState(); // Save the state when guessed correctly
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
      localStorage.setItem(`dinoGuessState-${this.dailyDateKey}`, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(`dinoGuessState-${this.dailyDateKey}`));
      if (savedState) {
        this.isCorrectGuess = savedState.isCorrectGuess || false;
        this.guesses = savedState.guesses || [];
      }
    },
    resetGame() {
      this.isCorrectGuess = false;
      this.guesses = [];
      this.saveState(); // Save the reset state for the new day
    }
  },
  mounted() {
    this.correctDino = this.getDailyDino();
    this.correctDinoData = dinoData.find(d => d.name === this.correctDino);
    if (localStorage.getItem(`dinoGuessState-${this.dailyDateKey}`)) {
      this.loadState();
    } else {
      this.resetGame();
    }
  },
  watch: {
    guesses: 'saveState',
    isCorrectGuess: 'saveState',
  },
};
</script>

<style scoped>
/* Add your styles here */
body, html {
  margin: 0;
  padding: 0;
  overflow-y: auto;
  font-family: Arial, sans-serif; /* Set a fallback font */
}

.dino-page-container {
  max-width: 850px;
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
  position: relative; /* Required for absolute positioning of overlay */
}

.dino-page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/overlay.jpg'); /* Correct image path */
  background-size: cover;
  background-position: center;
  opacity: 0.2; /* Adjust opacity */
  z-index: 1; /* Place behind other content */
}

.dino-page-container > * {
  position: relative; /* Ensure content appears above overlay */
  z-index: 2; /* Ensure it is above the overlay */
}

.dino-page {
  padding: 20px;
}

.guess-dino-container {
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  max-width: 80%;
  margin: 0 auto;
}

.guess-dino-container h2 {
  margin: 0;
  font-size: 24px;
  color: #88e9ff;
  font-family: 'Posterama', sans-serif; /* Apply Posterama font only to the heading */
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
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align content */
  padding: 10px;
  font-size: 16px;
  background: url('@/assets/ArkMenuThree.png');
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #B8860B; /* Dark gold border */
}

.victory-image {
  width: auto;  /* Set your desired width */
  height: 250px;  /* Maintain aspect ratio */
  max-width: 100%; /* Make sure it doesn't overflow its container */
  margin-top: 10px; /* Optional margin for spacing */
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
  background-color: #285c74;
  text-align: left;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown li {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #285c74; /* Light cyan background for each item */
  color: #88e9ff; /* Dark teal text color */
}

.dropdown li:hover {
  background-color: #3d88aa;
}

.dino-image {
  width: auto;
  height: 30px;
  margin-left: 10px;
  border-radius: 50%;
}

.table-container {
  display: flex; /* Use flexbox to center the table */
  justify-content: center; /* Center horizontally */
  margin-top: 20px; /* Optional margin for spacing */
}
.table-scroll {
  overflow-x: auto; /* Enable horizontal scrolling */
  display: block; /* Allows for scrolling */
}

.dino-table {
  min-width: 800px; /* Set a minimum width for the table to force scrolling */
  border-collapse: collapse; /* Collapse borders */
  text-align: center; /* Center the table content */
}

.dino-table th {
  color: #88e9ff;
  padding: 0px;
  border: 1px solid #ddd;
}

.dino-table td, .image-cell {
  border: 1px solid #ddd;
  text-align: center;
  padding: 2px;
  font-weight: bold; /* Makes the text in table cells bold */
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

@media (max-width: 950px) {
  .dino-page-container {
    max-width: 90%; /* Adjust the width to be smaller */
    padding: 5px; /* Reduce padding for smaller screens */
  }

  .table-container {
    max-width: 100%; /* Allow table to take full width of container */
    overflow-x: auto; /* Ensure horizontal scrolling if needed */
  }

  .dino-table {
    width: 100%; /* Full width for responsiveness */
    max-width: 100%; /* No maximum width to allow shrinking */
    font-size: 14px; /* Optional: reduce font size for smaller screens */
  }

  .dino-image {
    height: 25px; /* Optionally reduce image size */
  }

  .victory-image {
    height: 200px; /* Optionally adjust victory image height */
  }
}
@media (max-width: 500px) {
  .victory-image {
    height: 120px; /* Adjust the height of the success image */
  }
}
</style>
