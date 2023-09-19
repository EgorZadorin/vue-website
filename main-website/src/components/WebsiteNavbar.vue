<template>
  <nav>
    <ul>
      <li>
        <a :class="{ 'in-section': currentSection === 'about' }" @click="$emit('navigate', '#home')">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a :class="{ 'in-section': currentSection === 'about' }" @click="$emit('navigate', '#about')">
          <i class="fas fa-info-circle"></i>
          <span>About</span>
        </a>
      </li>
      <li>
        <a :class="{ 'in-section': currentSection === 'about' }" @click="$emit('navigate', '#portfolio')">
          <i class="fas fa-briefcase"></i>
          <span>Portfolio</span>
        </a>
      </li>
      <!--<li>
        <a :class="{ 'in-section': currentSection === 'about' }" @click="$emit('navigate', '#blog')">
          <i class="fas solid fa-blog"></i>
          <span>Blog</span>
        </a>
      </li>-->
      <li>
        <a :class="{ 'in-section': currentSection === 'about' }" @click="$emit('navigate', '#contact')">
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: "WebsiteNavbar",
  data() {
    return {
      currentSection: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = ["home", "about", "portfolio", "contact"];
      for (let section of sections) {
        const el = document.querySelector(`#${section}`);
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.currentSection = section;
          return;
        }
      }
    },
  },
};

</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding: 20px;  /* Increased padding */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 150px;  /* Increased width */
}


nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  gap: 15px;
}

nav li {
  display: inline;
}

nav a {
  color: #F0F0F0;
  text-decoration: none;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  font-size: 20px;
  cursor: pointer;
}

nav i {
  font-size: 40px;
}

nav a.in-section:hover {
  color: #F0F0F0;
}

nav a:hover {
  color: #57BB7E;
}

nav a:hover span {
  opacity: 1;
}

nav span {
  opacity: 0;
  margin-left: 5px;
  transition: opacity 0.2s ease-in-out;
}

@media (max-width: 767px) {
  nav {
    flex-direction: row;
    top: initial;
    bottom: 0;
    left: 0;
    padding: 0;
    width: 200px;
  }

  nav ul {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
  }

  nav a {
    padding: 15px;
  }
}

</style>