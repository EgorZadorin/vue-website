<!-- ContactPage.vue -->
<template>
  <h2>Contact</h2>
  <div class="contact-container">
    <p>Get in touch with me on the following platforms:</p>
    <div class="social-links">
      <a href="https://github.com/EgorZadorin" target="_blank" rel="noopener noreferrer">
        <span class="icon-wrapper">
          <i class="fab fa-github fa-2x"></i>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/egor-zadorin" target="_blank" rel="noopener noreferrer">
        <span class="icon-wrapper">
          <i class="fab fa-linkedin fa-2x"></i>
        </span>
      </a>
    </div></div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>

h2 {
  margin-bottom: 20px;
  color: #fff;
  font-size: 2em;
  text-align: center;
}

.contact-container {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  text-align: justify;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
}

.social-links a {
  text-decoration: none;
}

.social-links i {
  color: #333;
  transition: color 0.3s, opacity 0.3s;
}

.social-links a:hover i {
  color: #3CB371;
  text-decoration: none;
  opacity: 0.8;
}

</style>
