<!-- ContactPage.vue -->
<template>
  <div class="content">
    <h2>Available for select freelance opportunities</h2>
    <div class="content-inner">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>

.icon-wrapper i {
  font-size: 50px;
}

h2 {
  margin-bottom: 1px;
  font-size: 30px;
}

p {
  margin-top: 1px;
  font-size: 20px;
}


</style>
