<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <p class="disclaimer">* The following projects are fictional and for demonstration purposes only.</p>
    <div class="projects">
      <div class="project">
        <h3>Project Alpha</h3>
        <p>An e-commerce platform built using Java, Spring Boot, and Angular, providing a seamless shopping experience for customers and a powerful management dashboard for administrators.</p>
      </div>
      <div class="project">
        <h3>Project Beta</h3>
        <p>A real-time chat application developed using Node.js, Express, and React, featuring secure user authentication, group chats, and multimedia sharing capabilities.</p>
      </div>
      <div class="project">
        <h3>Project Gamma</h3>
        <p>A mobile fitness tracking app designed for iOS and Android platforms, leveraging Flutter and Firebase to help users track their workouts, set goals, and share achievements with friends.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
};
</script>

<style scoped>
.portfolio {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

h2 {
  margin-bottom: 20px;
  color: #fff;
  font-size: 2em;
  text-align: center;
}

.disclaimer {
  color: #ccc;
  font-size: 0.9em;
  margin-bottom: 30px;
  text-align: center;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

.project h3 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.project p {
  color: #333;
  margin-bottom: 0;
}
</style>
