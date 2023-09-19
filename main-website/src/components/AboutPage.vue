<template>
  <div class="content" itemscope itemtype="https://schema.org/Person">
    <h2>Hi, I'm <span itemprop="name">Egor Zadorin</span>,</h2>
    <div class="content-inner">
      <p>
        a Software Engineer specializing in Java/Spring Framework and AWS. As a Computer Science M.Sc.
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
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.content h2 {
  font-size: 70px;
}

.content p {
  font-weight: 600;
  font-size: 30px;
}
</style>
