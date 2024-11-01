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
  background-color: #f5f5f5;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 60%), 
                    url('@/assets/ArkBackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Keeps background fixed during scroll */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  border: 2px solid #ffffff;
  border-radius: 0px;
}

nav a.router-link-exact-active .nav-icon {
  border-color: #42abb9;
}
</style>
