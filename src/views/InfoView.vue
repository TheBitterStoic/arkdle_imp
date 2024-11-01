<template>
    <div class="info-page">
      <h1>About Arkdle</h1>
      <p>
        Arkdle is a daily guessing game revolving around the game Ark:Survival Evolved
      </p>
      <p>
        All 3 minigames reset daily, so be sure to come back everyday to try again!
      </p>
      <p>
        I am a solo developer currently in University, so if you have any suggestions, email arkdlefeedback@gmail.com
      </p>
      <p>
        If you want to support me with a small donation click below :)
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoView',
  };
  </script>
  
  <style scoped>
  .info-page {
    padding: 20px;
    background-color: #4b7a97; /* Use the same background color for consistency */
    border-radius: 8px;
    color: white;
    max-width: 500px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  </style>
  