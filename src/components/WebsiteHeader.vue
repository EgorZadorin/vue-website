<template>
  <header>
    <h1>Welcome to Egor Zadorin's Website!</h1>
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
  </header>
</template>

<script>
export default {
  name: "WebsiteHeader",
};
</script>
<style scoped>
header {
  text-align: center;
  padding: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
}
.social-links a {
  color: inherit;
  text-decoration: none;
}
.social-links a:hover {
  color: #3CB371;
  text-decoration: none;
}
</style>