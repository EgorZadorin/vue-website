<template>
  <div class="content">
    <h2>Open to diverse job opportunities and collaborations in SWE & MLE roles</h2>
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
  font-size: 5vh;
}

h2 {
  text-align: center;
  margin-bottom: 0.1vh;
  font-size: 3vh;
}

p {
  margin-top: 0.1vh;
  font-size: 2vh;
}

@media (max-width: 767px) {
  h2 {
    text-align: center;
  }

  .social-links a {
    margin: 0 2vw;
  }
}

</style>
