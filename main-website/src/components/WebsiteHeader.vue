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
  padding-left: 11%;
  max-width: 100%;
  overflow: hidden;
}

h1 {
  margin-top: -20px;
  font-weight: 400;
  font-size: calc(1em + 2vw);
}

h2 {
  margin-bottom: 0;
  font-weight: 800;
  font-size: calc(1.5em + 3vw);
}

@media only screen and (max-width: 768px) {

  h1 {
    margin-top: 1vh;
  }

  header {
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding-left: 0;
    width: 100%;
  }
}

</style>
