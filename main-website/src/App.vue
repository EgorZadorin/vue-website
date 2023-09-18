<template>
  <div id="app">
    <WebsiteNavbar @navigate="scrollToSection" />
    <div class="main-content">
      <section id="home">
        <WebsiteHeader />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="portfolio">
        <PortfolioPage />
      </section>
      <section id ="blog">
        <BlogPage />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
    <WebsiteFooter />
  </div>
</template>


<script>
import WebsiteNavbar from "./components/WebsiteNavbar.vue";
import WebsiteHeader from "./components/WebsiteHeader.vue";
import WebsiteFooter from "./components/WebsiteFooter.vue";
import ContactPage from "@/components/ContactPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import PortfolioPage from "@/components/ProjectsPage.vue";
import BlogPage from "@/components/BlogPage.vue";

export default {
  name: "App",
  components: {
    WebsiteNavbar,
    WebsiteHeader,
    WebsiteFooter,
    ContactPage,
    AboutPage,
    PortfolioPage,
    BlogPage
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>


<style>

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', 'Arial', sans-serif;
  color: #fff;
  font-size: 1.1em;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

#app::before {
  content: "";
  background-image: url('~@/assets/tech-background.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}

#home {
  position: relative;
  overflow: hidden;
}

#home::before {
  content: "";
  background-image: url('~@/assets/tech-background.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.main-content > section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 1;
  padding: 0 15px;
}

</style>

