<template>
  <div id="app">
    <div class="welcome-container">
      <h1 class="welcome-title">Welcome to Egor Zadorin's Website!</h1>
      <p class="welcome-text">This is a simple but beautiful Welcome page created with Vue.js.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('~@/assets/tech-background.jpg');
  background-size: cover;
  background-position: center;
}

.welcome-container {
  text-align: center;
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.welcome-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #3c3c3c;
}

.welcome-text {
  font-size: 1.25rem;
  color: #5a5a5a;
}
</style>
