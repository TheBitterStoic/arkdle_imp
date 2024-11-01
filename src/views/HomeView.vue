<template>
    <div class="home-container">
      <!-- Button to navigate to Dino page -->
      <router-link to="/dino" class="button-link">
        <button class="image-button">
          <img src="@/assets/DinoButton.png" alt="Dino Page" />
        </button>
      </router-link>
  
      <!-- Button to navigate to Saddle page -->
      <router-link to="/saddle" class="button-link">
        <button class="image-button">
          <img src="@/assets/SaddleButton.png" alt="Saddle Page" />
        </button>
      </router-link>
  
      <!-- Button to navigate to Sound page -->
      <router-link to="/sound" class="button-link">
        <button class="image-button">
          <img src="@/assets/SoundButton.png" alt="Sound Page" />
        </button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
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
  
  .image-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
  
  .image-button img {
    width: 400px; /* Adjust width for button images */
    height: auto;
  }
  </style>
  