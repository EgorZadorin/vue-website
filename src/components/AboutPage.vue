<template>
  <div class="content" itemscope itemtype="https://schema.org/Person">
    <h2>About Me</h2>
    <div class="content-inner">
      <p>
        Hi, I'm <span itemprop="name">Egor Zadorin</span>, a software engineer
        specializing in Java/Spring Boot and AWS. As a Computer Science M.Sc.
        student, I constantly refine my skills to develop innovative solutions.
        Explore my personal website to discover my experience and dedication to
        impactful software creation.
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
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.content-inner {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
  text-align: justify;
}

h2 {
  margin-bottom: 20px;
  color: #fff;
  font-size: 2em;
  text-align: center;
}

p {
  color: #333;
  margin-bottom: 15px;
}

p:last-child {
  margin-bottom: 0;
}
</style>
