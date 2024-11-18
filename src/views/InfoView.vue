<template>
  <div class="info-page">
    <h1>About Arkdle</h1>
    <p>
      Arkdle is a daily guessing game revolving around the game Ark: Survival Evolved.
    </p>
    <p>
      All 3 minigames reset daily, so be sure to come back every day to try again!
    </p>
    <p>
      I am a solo developer currently in University, so if you have any suggestions/criticism, email: arkdlefeedback@gmail.com.
    </p>
  </div>
</template>


<style scoped>
.info-page {
  padding: 20px;
  background: radial-gradient(
    circle, 
    #285c74 60%, 
    #1e4c5d 90%, 
    #12333d 100%
  );
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  max-width: 500px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Posterama', sans-serif; /* Apply Posterama font only to the heading */
}

p {
  font-size: 16px;
  line-height: 1.5;
}
@media (max-width: 600px) {
  .info-page {
    padding: 5px; /* Reduce padding */
    max-width: 90%; /* Allow the container to take up more width */
  }

  h1 {
    font-size: 20px; /* Decrease heading font size */
  }

  p {
    font-size: 14px; /* Decrease paragraph font size */
  }

  #donate-button-container {
    text-align: center; /* Center the donation button */
    margin-top: 15px; /* Add some space above the button */
  }

  #donate-button {
    width: 100%; /* Make the button full-width */
    padding: 10px; /* Add padding for the button */
  }
}
</style>
