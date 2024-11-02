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
      I am a solo developer currently in University, so if you have any suggestions, email: arkdlefeedback@gmail.com.
    </p>
    <p>
      If you want to support me with a small donation, click below :)
    </p>
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoView',
  mounted() {
    this.loadPayPalScript();
  },
  methods: {
    loadPayPalScript() {
      const script = document.createElement('script');
      script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      script.async = true;

      script.onload = () => {
        this.renderPayPalButton();
      };

      script.onerror = () => {
        console.error("Failed to load the PayPal SDK script.");
      };

      document.body.appendChild(script);
    },
    renderPayPalButton() {
      if (window.PayPal) {
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: 'K66PBFB7USXTW', // Replace with your actual button ID
          image: {
            src: 'https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif',
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
          }
        }).render('#donate-button');
      } else {
        console.error("PayPal SDK not loaded.");
      }
    }
  }
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
