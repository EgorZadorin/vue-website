<template>
  <nav>
    <ul>
      <li>
        <a href="javascript:void(0)" @click="$emit('navigate', '#home')">
          <i class="fas fa-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="$emit('navigate', '#about')">
          <i class="fas fa-info-circle"></i>
          <span>About</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="$emit('navigate', '#portfolio')">
          <i class="fas fa-briefcase"></i>
          <span>Portfolio</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="$emit('navigate', '#blog')">
          <i class="fas solid fa-blog"></i>
          <span>Blog</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="$emit('navigate', '#contact')">
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
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
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
  color: white;
  text-decoration: none;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  font-size: 16px;
}

nav i {
  font-size: 24px;
}

nav a:hover {
  color: #3CB371;
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
    width: 100%;
    top: initial;
    bottom: 0;
    left: 0;
    padding: 0;
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