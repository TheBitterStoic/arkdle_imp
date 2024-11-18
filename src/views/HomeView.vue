<template>
  <div class="home-container">
    <!-- Button to navigate to Dino page -->
    <router-link to="/dino" class="button-link">
      <div class="rect-button">
        <img src="@/assets/DinoMini.png" alt="Dino Page" class="button-image" />
        <span class="button-text">GUESS THE DINO</span>
      </div>
    </router-link>

    <!-- Button to navigate to Saddle page -->
    <router-link to="/saddle" class="button-link">
      <div class="rect-button">
        <img src="@/assets/SaddleMini.png" alt="Saddle Page" class="button-image" />
        <span class="button-text">GUESS THE SADDLE</span>
      </div>
    </router-link>

    <!-- Button to navigate to Sound page -->
    <router-link to="/sound" class="button-link">
      <div class="rect-button">
        <img src="@/assets/SoundMini.png" alt="Sound Page" class="button-image" />
        <span class="button-text">GUESS THE SOUND</span>
      </div>
    </router-link>

    <!-- Button to navigate to Map page -->
    <router-link to="/mapview" class="button-link">
      <div class="rect-button">
        <img src="@/assets/MapMini.png" alt="Map Page" class="button-image" />
        <span class="button-text">GUESS THE PLACE</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Space between buttons */
  padding-top: 20px;
}

.button-link {
  text-decoration: none; /* Remove underline from router-link */
}

.rect-button {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align items to the start */
  width: 400px; /* Adjust width for rectangular buttons */
  height: 60px; /* Set a fixed height for buttons */
  background: linear-gradient(to bottom, #285c74, #1a404e, #285c74); /* Light at the top, dark in the middle, light at the bottom */
  border-radius: 0px; /* Rounded corners */
  padding: 10px; /* Add some padding */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for buttons */
  cursor: pointer; /* Change cursor to pointer */
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transition for hover effect */
  border: 3px solid #408aa5; /* Add a border */
}

.rect-button:hover {
  /* Optional hover effect to slightly darken the entire button */
  background: linear-gradient(to bottom, #3d88aa, #285c74, #3d88aa);
  border-color: #f5f5f5; /* Change border color on hover */
}

.button-image {
  width: 80px; /* Small image width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Space between image and text */
}

.button-text {
  font-size: 30px; /* Font size for button text */
  color: #88e9ff; /* Text color */
  font-weight: bold; /* Make text bold */
  font-family: "Posterama";
}

@media (max-width: 447px) {
  .rect-button {
    width: 300px; /* Make buttons full-width */
    height: 40px; /* Adjust height for smaller screens */
    padding: 5px; /* Reduce padding */
    flex-direction: row; /* Ensure items are aligned properly */
  }

  .button-text {
    font-size: 22px; /* Adjust font size for smaller screens */
  }

  .button-image {
    width: 50px; /* Adjust image width for smaller screens */
  }

  .home-container {
    padding-top: 10px; /* Adjust padding for the container */
  }
}
</style>
