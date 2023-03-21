<!-- ContactPage.vue -->
<template>
  <div>
    <h1>Contact</h1>
    <p>Get in touch with me on the following platforms:</p>
    <ul>
      <li>
        <a href="https://m.facebook.com/people/Egor-Zadorin/100009764502548/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </li>
      <li>
        <a href="https://github.com/EgorZadorin" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/egor-zadorin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
    </ul>
    <button @click="$emit('close-contact')">Close</button>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
