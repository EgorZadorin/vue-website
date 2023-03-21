<template>
  <div id="app">
    <WebsiteNavbar/>
    <div class="main-content">
      <WebsiteHeader/>
      <WebsiteContent/>
    </div>
    <ContactPage v-if="showContact" @close-contact="toggleContactPage"/>
    <WebsiteFooter/>
  </div>
</template>

<script>
import WebsiteNavbar from "./components/WebsiteNavbar.vue";
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteContent from "./components/WebsiteContent.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
import ContactPage from "@/components/ContactPage.vue";

export default {
  name: "App",
  components: {
    WebsiteNavbar,
    WebsiteHeader,
    WebsiteContent,
    WebsiteFooter,
    ContactPage,
  },
  data() {
    return {
      showContact: false,
    };
  },
  methods: {
    toggleContactPage() {
      this.showContact = !this.showContact;
    }
  }
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
  flex-direction: column;
  min-height: 100vh;
  background-image: url('~@/assets/tech-background.jpg');
  background-size: cover;
  background-position: center;
}

.main-content {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}

</style>
