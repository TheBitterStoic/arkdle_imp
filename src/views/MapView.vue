<template>
  <div class="map-page-container">
    <!-- Help Button -->
    <button class="help-button" @click="showPopup = true">?</button>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <button class="close-button" @click="showPopup = false">X</button>
        <h3>How to Play</h3>
        <p>
          Every day at 01:00 GMT, a random location from Ark maps is chosen for you to guess.
        </p>
        <p>
          <strong>Getting Started:</strong><br />
          Select a map from the dropdown menu to begin. The selected map will load for you to place your guesses.
        </p>
        <p>
          <strong>Placing Guesses:</strong><br />
          Click on the map to place a pin where you think the location is. If you're on the wrong map, you'll receive a message after placing your first pin.
        </p>
        <p>
          <strong>Understanding Pin Colors:</strong><br />
          On the correct map, the pin color will indicate how close your guess is to the target location:
        </p>
        <ul>
          <li><span class="red-text">Red:</span> Far away from the target.</li>
          <li><span style="color: orange;">Orange:</span> Close to the target.</li>
          <li><span class="green-text">Green:</span> Correct guess!</li>
        </ul>
        <p>
          If you notice any errors or have feature suggestions, please email us at
          <a href="mailto:arkdlefeedback@gmail.com">arkdlefeedback@gmail.com</a>.
        </p>
        <p>Happy guessing!</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="map-page">
      <!-- Header -->
      <div class="guess-map-container">
        <h2 class="map-heading">GUESS THE LOCATION</h2>
        <img v-if="currentImage" :src="currentImage" alt="Featured location" class="featured-image" />
        <p v-else>No featured location available today.</p>
        <div v-if="!zoomedOut && tries < 10" class="zoom-out-countdown">
  The image will zoom out in {{ 10 - tries }} {{ 10 - tries === 1 ? 'try' : 'tries' }}.
</div>
        <!-- Victory Message or Dropdown -->
        <div v-if="!victory" class="input-message-container">
          <p class="choose-map-text">Choose a Map, and place markers</p>
          <select v-model="selectedMap" class="map-dropdown" :disabled="victory">
            <option value="" disabled>Choose a Map</option>
            <option v-for="map in maps" :key="map.name" :value="map.name">
              {{ map.name }}
            </option>
          </select>
        </div>

        <div v-else class="victory-container">
          <p class="victory-message">
            🎉 Congratulations! You guessed the location in {{ tries }} {{ tries === 1 ? 'try' : 'tries' }}! 🎉
          </p>
        </div>

        <!-- Display Selected Map -->
        <div v-if="selectedMap" class="map-container">
          <img
            :src="getMapImage(selectedMap)"
            alt="Selected Map"
            class="map-image"
            @click="placeCircle($event)"
          />
          <div
            v-for="(circle, index) in circles[selectedMap] || []"
            :key="index"
            class="circle"
            :style="{ top: circle.y + '%', left: circle.x + '%', backgroundColor: circle.color }"
          ></div>
        </div>

        <!-- Wrong Map Message -->
        <p v-if="selectedMap && selectedMap !== featuredImage?.map && hasPlacedCircle" class="wrong-map-message">
          Not the right map!
        </p>
      </div>
    </div>
<!-- Feedback Form -->
<div class="feedback-container">
  <h2>Image Submission</h2>
  <p class="feedback-instructions">
    Please provide the following information to <strong>arkdlefeedback@gmail.com</strong>:
  </p>
  <ul class="feedback-list">
    <li>The fullscreen image in-game</li>
    <li>A secondary fullscreen image in-game that is taken from further away</li>
    <li>No HUD and preferably no hands in the image</li>
    <li>The coordinates of the location</li>
  </ul>
</div>
  </div>
</template>

<script>
import maps from "@/data/maps.js";
import locations from "@/data/locations.js";
import locationsZoomedOut from "@/data/locations_zoomed_out.js";

export default {
  name: "MapView",
  data() {
    return {
      showPopup: false,
      selectedMap: "",
      maps,
      featuredImage: null,
      circles: {},
      tolerance: 5,
      victory: false,
      tries: 0,
      hasPlacedCircle: false,
      dailyKey: "",
      currentImage: null,
      zoomedOut: false,
      feedbackText: "",
      feedbackFiles: [],
    };
  },
  methods: {
    getDailyKey() {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    },
    getDailyFeaturedLocation() {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24) + 4);
      const index = dayOfYear % locations.length;
      const location = locations[index];

      if (!location) {
        console.error("No location found for index:", index);
      }

      this.currentImage = location.image;
      return location;
    },
    switchToZoomedOut() {
      const zoomedOutLocation = locationsZoomedOut.find(
        (loc) => loc.id === this.featuredImage.id
      );
      if (zoomedOutLocation) {
        console.log("Switching to zoomed-out image:", zoomedOutLocation.image);
        this.currentImage = zoomedOutLocation.image;
        this.zoomedOut = true;
      } else {
        console.error(
          "Zoomed-out image not found for featured image ID:",
          this.featuredImage.id
        );
      }
    },
    getMapImage(mapName) {
      const map = this.maps.find((m) => m.name === mapName);
      return map ? map.image : null;
    },
    placeCircle(event) {
  if (!this.selectedMap || this.victory) return;

  const mapElement = event.target;
  const rect = mapElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  const boundedX = Math.max(0, Math.min(100, x));
  const boundedY = Math.max(0, Math.min(100, y));

  const distance = this.calculateDistance(boundedX, boundedY);
  let color;

  if (this.selectedMap !== this.featuredImage?.map) {
    color = "red";
  } else {
    color = this.getCircleColor(distance);
    if (distance <= this.tolerance) {
      this.victory = true;
    }
  }

  // Add the circle to the selected map's circle list
  if (!this.circles[this.selectedMap]) {
    this.circles[this.selectedMap] = [];
  }
  this.circles[this.selectedMap].push({ x: boundedX, y: boundedY, color });

  this.hasPlacedCircle = true; // Set this to true when placing a circle
  this.tries++;
  this.saveState();

  // Trigger zoomed-out view if the number of attempts exceeds the threshold
  if (this.tries >= 10 && !this.zoomedOut) {
    this.switchToZoomedOut();
  }
}
,
    calculateDistance(x, y) {
      if (!this.featuredImage?.correctLocation) return null;

      const { correctLocation } = this.featuredImage;
      const correctX = correctLocation.x;
      const correctY = correctLocation.y;

      const distance = Math.sqrt(Math.pow(x - correctX, 2) + Math.pow(y - correctY, 2));
      return Math.round(distance * 100) / 100;
    },
    getCircleColor(distance) {
      if (distance <= this.tolerance) return "green";
      if (distance <= this.tolerance * 10) return "orange";
      return "red";
    },
    saveState() {
      const state = {
        selectedMap: this.selectedMap,
        circles: this.circles,
        tries: this.tries,
        victory: this.victory,
        zoomedOut: this.zoomedOut,
      };
      localStorage.setItem(this.dailyKey, JSON.stringify(state));
    },
    loadState() {
      const savedState = JSON.parse(localStorage.getItem(this.dailyKey));
      if (savedState) {
        this.selectedMap = savedState.selectedMap || "";
        this.circles = savedState.circles || {};
        this.tries = savedState.tries || 0;
        this.victory = savedState.victory || false;
        this.zoomedOut = savedState.zoomedOut || false;

        if (this.zoomedOut && this.featuredImage) {
          const zoomedOutLocation = locationsZoomedOut.find(
            (loc) => loc.id === this.featuredImage.id
          );
          this.currentImage = zoomedOutLocation?.image || this.featuredImage.image;
        }
      }
    },
    handleFileUpload(event) {
    this.feedbackFiles = Array.from(event.target.files);
  },
  sendFeedback() {
    const email = "arkdlefeedback@gmail.com";
    const subject = encodeURIComponent("Feedback Submission");
    const body = encodeURIComponent(this.feedbackText);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    console.log("Files to attach:", this.feedbackFiles);

    // Open mail client with pre-filled feedback
    window.location.href = mailtoLink;

    // Reset feedback form
    this.feedbackText = "";
    this.feedbackFiles = [];
    alert("Thank you for your feedback!");
  },
  },
  mounted() {
    this.dailyKey = this.getDailyKey();
    this.featuredImage = this.getDailyFeaturedLocation();
    this.loadState();
  },
};
</script>
  
  <style scoped>
.map-page-container {
  max-width: 750px;
  margin: 0 auto;
  padding: 20px;
  background: radial-gradient(
    circle, 
    #285c74 60%, 
    #1e4c5d 90%, 
    #12333d 100%
  ); /* Main gradient background */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative; /* Required for absolute positioning of overlay */
}

.map-page-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/overlay.jpg'); /* Update with the correct image path */
  background-size: cover; /* Ensure the image covers the entire container */
  background-position: center; /* Center the background image */
  opacity: 0.2; /* Adjust the opacity for the overlay effect */
  z-index: 1; /* Place behind other content */
}

.map-page-container > * {
  position: relative; /* Ensure content appears above overlay */
  z-index: 2; /* Ensure it is above the overlay */
}

.map-page {
  padding: 20px;
}

.choose-map-text {
  padding: 1px 0;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
}

.guess-map-container {
  text-align: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 8px;
  max-width: 80%;
  margin: 0 auto;
}

.map-heading {
  margin: 0;
  font-size: 24px;
  color: #88e9ff;
  font-family: "Posterama", sans-serif;
}

.featured-image {
  width: 100%;
  max-width: 500px;
  margin: 5px auto;
  border-radius: 8px;
}

.input-message-container {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
}

.map-dropdown {
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #285c74;
  color: #ffffff;
  max-height: 300px; /* Limit the height */
  overflow-y: auto; /* Add vertical scroll if content exceeds height */
  box-sizing: border-box; /* Ensure padding is included in the total height */
}

.map-dropdown option {
  padding: 5px; /* Add padding for individual options */
  background-color: #285c74; /* Background color for options */
  color: #ffffff; /* Text color for options */
}

.map-dropdown:focus {
  outline: none;
  border-color: #CFB53B;
}

.map-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  overflow: hidden;
}

.map-image {
  display: block;
  width: 100%;
  height: auto;
  cursor: crosshair;
  position: relative;
  z-index: 1;
}

.circle {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%; /* Makes the element a circle */
  z-index: 2;
  transition: background-color 0.3s; /* Smooth color transition */
}

.wrong-map-message {
  margin-top: 20px;
  font-size: 18px;
  color: #ff4d4d; /* Red for wrong map */
  font-weight: bold;
  text-align: center;
}

.victory-container {
  display: flex; /* Use flexbox for layout */
  flex-direction: column; /* Stack content vertically */
  align-items: center; /* Center-align content */
  padding: 10px; /* Add padding here */
  font-size: 16px;
  background: url('@/assets/ArkMenuThree.png'); /* Background image */
  background-position: center; /* Center the background image */
  background-size: cover; /* Ensure the background covers the entire container */
  color: white;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #B8860B; /* Dark gold border */
  margin-top: 10px; /* Adds space above the container */
  margin-bottom: 10px;
}


.victory-message {
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}

.wrong-map-message {
  margin-top: 20px;
  font-size: 30px;
  color: #ff4d4d; /* Red for wrong map */
  font-weight: bold;
  text-align: center;
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
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4; /* Ensure it appears above the help button */
}

/* Popup Content Styles */
.popup-content {
  background-color: #161616; /* Dark gray background */
  color: #e7eef0; /* Light text color */
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
  font-family: Arial, sans-serif;
  text-align: left;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Slightly stronger shadow for depth */
}

/* Close Button Styles */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #b6202f; /* Red for close button */
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Heading Styles */
.popup-content h3 {
  margin-top: 0;
  color: #285c74; /* Teal heading color */
}

/* Paragraph Styles */
.popup-content p {
  margin-bottom: 15px;
}

/* Text Color Indicators */
.green-text {
  color: #1a8b1e; /* Bright green */
  font-weight: bold;
}

.red-text {
  color: #b6202f; /* Bright red */
  font-weight: bold;
}

/* Link Styles */
.popup-content a {
  color: #285c74; /* Teal link color */
  text-decoration: none;
}

.popup-content a:hover {
  text-decoration: underline;
}
.feedback-container {
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #285c74;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: #ffffff;
}

.feedback-container h2 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  color: #88e9ff;
}

.feedback-instructions {
  font-size: 16px;
  margin-bottom: 10px;
  color: #ffffff;
  text-align: center;
}

.feedback-list {
  margin-bottom: 10px;
  padding-left: 20px;
  color: #ffffff;
}

.feedback-textarea {
  width: 90%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: none;
  resize: none;
  font-size: 16px;
  color: #285c74;
}

.feedback-file-input {
  display: block;
  margin-bottom: 10px;
}

.feedback-submit-button {
  background-color: #1a8b1e;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.feedback-submit-button:hover {
  background-color: #148c19;
}
@media (max-width: 850px) {
  .map-page-container {
    max-width: 90%; /* Adjust width for smaller screens */
    padding: 10px; /* Reduce padding */
    margin: 10px auto; /* Add some margin */
  }

  .map-container {
    max-width: 100%; /* Allow the map to scale responsively */
    margin: 10px auto; /* Adjust margin */
  }

  .map-image {
    width: 100%; /* Ensure the map takes full width */
    height: auto; /* Maintain aspect ratio */
  }

  .guess-map-container {
    padding: 10px; /* Reduce padding */
    margin: 0 auto 20px; /* Adjust spacing */
  }

  .victory-container {
    padding: 5px; /* Reduce padding */
    font-size: 14px; /* Adjust font size for smaller screens */
    margin-top: 10px; /* Reduce margin above container */
  }

  .victory-message {
    font-size: 18px; /* Adjust text size for victory message */
  }

  .wrong-map-message {
    font-size: 24px; /* Slightly reduce size */
    margin-top: 10px; /* Adjust spacing */
  }

  .popup-content {
    width: 95%; /* Allow popup to take more space */
    max-width: 400px; /* Adjust max width */
    padding: 15px; /* Reduce padding */
  }

  .close-button {
    font-size: 20px; /* Adjust size of close button */
  }

  .choose-map-text {
    font-size: 16px; /* Adjust text size */
  }

  .map-dropdown {
    font-size: 14px; /* Adjust dropdown font size */
    padding: 8px; /* Reduce padding */
  }

  .circle {
    width: 8px; /* Reduce circle size */
    height: 8px; /* Reduce circle size */
  }

  .help-button {
    width: 25px; /* Reduce button size */
    height: 25px; /* Adjust button size */
    font-size: 16px; /* Adjust text size */
  }
  .feedback-container {
    width: 90%;
    padding: 15px;
  }

  .feedback-container h2 {
    font-size: 22px;
  }

  .feedback-instructions {
    font-size: 15px;
  }

  .feedback-list {
    font-size: 14px;
  }

  .feedback-textarea {
    height: 80px;
    font-size: 14px;
  }

  .feedback-submit-button {
    font-size: 14px;
    padding: 8px 15px;
  }
}
@media (max-width: 440px) {
  .map-page-container {
    max-width: 90%; /* Full width for tiny screens */
    padding: 2px; /* Minimal padding */
    margin: 5px auto; /* Smaller margin */
  }

  .map-container {
    max-width: 100%; /* Ensure responsiveness */
    margin: 5px auto; /* Reduce spacing */
  }

  .map-image {
    width: 100%; /* Full width for the map */
    height: auto; /* Maintain aspect ratio */
  }

  .guess-map-container {
    padding: 8px; /* Reduce padding */
    margin: 0 auto 15px; /* Adjust spacing */
  }

  .victory-container {
    padding: 5px; /* Reduce padding */
    font-size: 12px; /* Smaller font size for tiny screens */
    margin-top: 8px; /* Adjust margin */
  }

  .victory-message {
    font-size: 16px; /* Adjust text size */
  }

  .wrong-map-message {
    font-size: 20px; /* Smaller font size */
    margin-top: 5px; /* Reduce spacing */
  }

  .popup-content {
    width: 95%; /* Allow more space for content */
    max-width: 350px; /* Adjust max width */
    padding: 10px; /* Reduce padding */
  }

  .close-button {
    font-size: 18px; /* Adjust size of close button */
  }

  .choose-map-text {
    font-size: 14px; /* Smaller text size */
  }

  .map-dropdown {
    font-size: 12px; /* Reduce dropdown font size */
    padding: 6px; /* Minimize padding */
  }

  .circle {
    width: 6px; /* Smaller circle size */
    height: 6px; /* Smaller circle size */
  }

  .help-button {
    width: 20px; /* Smaller button size */
    height: 20px; /* Adjust button size */
    font-size: 14px; /* Adjust text size */
  }

  .featured-image {
    max-width: 100%; /* Ensure it fits the screen */
    margin: 5px auto; /* Smaller spacing */
  }
  .feedback-container {
    width: 80%;
    padding: 10px;
  }

  .feedback-container h2 {
    font-size: 20px;
  }

  .feedback-instructions {
    font-size: 14px;
  }

  .feedback-list {
    font-size: 12px;
  }

  .feedback-textarea {
    height: 70px;
    font-size: 12px;
  }

  .feedback-submit-button {
    font-size: 12px;
    padding: 6px 10px;
  }
}

  </style>
  