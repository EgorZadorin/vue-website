<template>
  <div id="app">
    <WebsiteNavbar @show-contact="toggleContactPage" @navigate="navigateTo"/>
    <div class="main-content">
      <WebsiteHeader v-show="currentSection === 'home'"/>
      <AboutPage v-show="currentSection === 'about'"/>
    </div>
    <ContactPage v-if="showContact" @close-contact="toggleContactPage"/>
    <WebsiteFooter/>
  </div>
</template>

<script>
import WebsiteNavbar from "./components/WebsiteNavbar.vue";
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
import ContactPage from "@/components/ContactPage.vue";
import AboutPage from "@/components/AboutPage.vue";

export default {
  name: "App",
  components: {
    WebsiteNavbar,
    WebsiteHeader,
    WebsiteFooter,
    ContactPage,
    AboutPage,
  },
  data() {
    return {
      showContact: false,
      currentSection: "home",
    };
  },
  methods: {
    toggleContactPage() {
      this.showContact = !this.showContact;
    },
    navigateTo(section) {
      this.currentSection = section;
    },
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
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

#app::before {
  content: "";
  background-image: url('~@/assets/tech-background.jpg');
  background-size: cover;
  background-position: center;
  filter: grayscale(100%) brightness(30%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.main-content {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  position: relative;
}

</style>
