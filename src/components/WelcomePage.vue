<template>
  <div class="welcome-container">
    <h1>Welcome to My Website</h1>
    <p>This is a simple welcome page for my amazing website. Feel free to explore!</p>
    <button @click="explore" class="explore-button">Explore</button>
  </div>
</template>

<script>
export default {
  methods: {
    explore() {
      alert("Explore button clicked! You can add your own functionality here.");
    },
  },
};
</script>

<style scoped>
/* Add the CSS from the previous example here */
</style>
