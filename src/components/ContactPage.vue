<!-- ContactPage.vue -->
<template>
  <div class="contact-container">
    <h1>Contact</h1>
    <p>Get in touch with me on the following platforms:</p>
    <ul class="social-links">
      <li>
        <a href="https://github.com/EgorZadorin" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/egor-zadorin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
    </ul>
    <button class="close-button" @click="$emit('close-contact')">Close</button>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-container {
  background-color: rgba(127, 127, 127, 0.8);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}


.social-links {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.social-links li {
  margin: 0 10px;
}

.social-links a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}

.social-links a:hover {
  text-decoration: underline;
}

.close-button {
  background-color: #333;
  color: white;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.close-button:hover {
  background-color: #555;
}
</style>
