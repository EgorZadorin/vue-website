<template>
  <div class="content">
    <div class="content-inner">
      <h2>About Me</h2>
      <p>Hi, I'm Egor Zadorin, a software engineer and M.Sc. student in Computer Science!</p>
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
