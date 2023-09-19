<template>
  <header>
    <h2>EGOR ZADORIN</h2>
    <h1>Software & ML Engineer</h1>
  </header>
</template>

<script>
export default {
  name: "WebsiteHeader",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap');


header {
  font-family: 'Raleway', 'Arial', sans-serif;

  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 200px;
}

h1 {
  margin-top: -20px;
  font-weight: 400;
  font-size: 66.5px;
}

h2 {
  margin-bottom: 0;
  font-weight: 800;
  font-size: 100px;
}



</style>
