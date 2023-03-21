<template>
  <nav>
    <ul>
      <li><a href="javascript:void(0)" @click="$emit('navigate', 'home')">Home</a></li>
      <li><a href="javascript:void(0)" @click="$emit('navigate', 'about')">About</a></li>
      <li><a href="javascript:void(0)" @click="$emit('navigate', 'portfolio')">Portfolio</a></li>
      <li><a href="javascript:void(0)" @click="$emit('show-contact')">Contact</a></li>
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
  justify-content: space-around;
  padding: 10px;
  background-color: #333;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav li {
  display: inline;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
}

nav a:hover {
  background-color: #555;
}
</style>
