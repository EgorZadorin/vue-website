<template>
  <div id="app">
    <WebsiteNavbar />
    <WebsiteHeader />
    <WebsiteContent />
    <WebsiteFooter />
  </div>
</template>

<script>
import WebsiteNavbar from "./components/WebsiteNavbar.vue";
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteContent from "./components/WebsiteContent.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";

export default {
  name: "App",
  components: {
    WebsiteNavbar,
    WebsiteHeader,
    WebsiteContent,
    WebsiteFooter,
  },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('~@/assets/tech-background.jpg');
  background-size: cover;
  background-position: center;
}

</style>
