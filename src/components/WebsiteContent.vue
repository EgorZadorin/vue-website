<template>
  <div class="content">
    <div class="content-inner">
      <h2>About Me</h2>
      <p>Hi, I'm Egor Zadorin, an aspiring software engineer with a strong background in Java/Spring Boot and AWS Web Services. As an M.Sc. student in Computer Science, I'm continually honing my skills and expertise to deliver innovative solutions in the rapidly evolving world of technology. Welcome to my personal website, where you can learn more about my experience and passion for creating impactful software.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebsiteContent",
};
</script>

<style scoped>
.content {
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.content-inner {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 30px;
  border-radius: 10px;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

p {
  color: #333;
}
</style>
