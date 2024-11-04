<template>
  <div id="app">
    <!-- Logo linked to Home -->
    <router-link to="/">
      <img src="@/assets/ArkLogo.png" alt="Logo" class="logo"/>
    </router-link>
    
    <!-- Navigation Links -->
    <nav>
      <router-link to="/">
        <img src="@/assets/HomeMini.png" alt="Home" class="nav-icon"/>
      </router-link>
      <router-link to="/dino">
        <img src="@/assets/DinoMini.png" alt="Dino" class="nav-icon"/>
      </router-link>
      <router-link to="/saddle">
        <img src="@/assets/SaddleMini.png" alt="Saddle" class="nav-icon"/>
      </router-link>
      <router-link to="/sound">
        <img src="@/assets/SoundMini.png" alt="Sound" class="nav-icon"/>
      </router-link>
      <router-link to="/info"> <!-- Add Info link -->
        <img src="@/assets/InfoMini.png" alt="Info" class="nav-icon"/>
      </router-link>
    </nav>

    <!-- Page Content -->
    <router-view/>
  </div>
</template>

<style>
/* Fixed background on body */
body {
  margin: 0;
  height: 100vh;
  overflow-y: scroll; /* Enable scrollbar */
  background-color: #f5f5f5; /* Fallback color */
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), /* Dark to transparent gradient */
  url('@/assets/ArkBackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps background fixed during scroll */
}


#app {
  font-family: 'Futura', sans-serif; /* Use Futura font */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  min-height: 100vh;
}

.logo {
  width: 200px;
  margin: 10px;
  cursor: pointer;
}

nav {
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 2px solid #408aa5;
  border-radius: 0px;
  background-color: #285c74;
}

nav a.router-link-exact-active .nav-icon {
  border-color: #CFB53B;
}

/* Add the font faces for Futura */
@font-face {
    font-family: 'Futura';
    src: url('@/assets/fonts/Futura Bold font.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Futura';
    src: url('@/assets/fonts/Futura Book font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Futura';
    src: url('@/assets/fonts/futura medium bt.ttf') format('truetype');
    font-weight: 500; /* Medium weight */
    font-style: normal;
}
@font-face {
    font-family: 'Posterama';
    src: url('@/assets/fonts/Posterama 2001 W04 Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@media (max-width: 375px) {
  .logo {
    width: 150px; /* Reduce logo size for smaller screens */
  }

  nav {
    padding: 5px; /* Adjust padding for navigation */
    flex-direction: row; /* Stack nav icons vertically */
    gap: 15px; /* Reduce space between icons */
  }

  .nav-icon {
    width: 40px; /* Reduce icon size */
    height: 40px; /* Maintain aspect ratio */
  }

  nav a.router-link-exact-active .nav-icon {
    border-color: #CFB53B; /* Keep border color change for active link */
  }
}
</style>
