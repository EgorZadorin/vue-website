<template>
  <div id="app-wrapper">
    <h1>Welcome to Email Service</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at eleifend dui. Fusce euismod magna ultrices dui vulputate, sit amet ornare ante accumsan. Aliquam pretium pellentesque feugiat. Nullam sit amet magna luctus, suscipit mi non, fringilla nisi. Curabitur maximus efficitur lorem ut dapibus. Aliquam et pharetra felis. Nunc convallis posuere molestie.
    </p>
    <p>
      In tincidunt rhoncus mi, tempus lacinia ipsum luctus in. Duis luctus finibus erat, in pellentesque turpis posuere id. Nunc malesuada leo leo, ac laoreet eros pulvinar id. Fusce consequat, velit egestas consequat efficitur, diam lacus maximus magna, at mollis metus mauris a justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam sed quam efficitur, porttitor eros vitae, cursus magna. Curabitur lacinia nisi eu eleifend gravida. Integer facilisis diam purus, ultricies placerat urna aliquam sit amet. Nunc vitae dolor convallis, condimentum mi vel, fringilla libero.
    </p>
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;900&display=swap');

#app-wrapper {
  width: 60vw;
  margin-top: 20vh;
  margin-left: 20vw;
  text-align: left;
}

body, h1, p {
  font-family: 'Raleway', sans-serif;
  color:  #F0F0F0;
  background-color: #000000;
}

h1 {
  font-size: calc(1.5vh + 2.5vw);
  font-weight: bold;
}

p {
  font-size: calc(0.5vh + 0.8vw);
  font-weight: normal;
}

</style>