<template>
  <div class="content" itemscope itemtype="https://schema.org/Person">
    <h2>Hi, I'm <span itemprop="name">Egor Zadorin</span>!</h2>
    <div class="content-inner">
      <p>
        As a Software Engineer and a current Master's student in Computer Science,
        I specialize in leveraging Java/Spring Framework and AWS to drive impactful software innovation.
        Eager to continue refining my skills, I am consistently on the lookout for opportunities to learn and practically apply new technologies.
        Explore my personal website to learn more about my dedication to impactful software creation!
      </p>
      <p itemprop="jobTitle" content="Software Engineer"></p>
      <p itemprop="url" content="https://egorzadorin.com"></p>
      <p itemprop="sameAs" content="https://github.com/EgorZadorin"></p>
      <p itemprop="sameAs" content="https://www.linkedin.com/in/egor-zadorin"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>

.content {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 2%;
}

.content-inner {
  width: 80%;
  max-width: 100%;
}

.content h2 {
  font-size: calc(2em + 1vw);
}

.content p {
  font-weight: 600;
  font-size: calc(1em + 1vw);
}

@media (max-width: 767px) {
  .content {
    padding: 0 5%;
  }
  .content-inner {
    width: 100%;
  }
}

</style>
