<template>
  <div class="blog-post-preview">
    <a :href="'https://blog.egorzadorin.com/' + post.slug" target="_blank">
      <h3>{{ post.title }}</h3>
    </a>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  name: "BlogPostPreview",
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.blog-post-preview {
  margin-bottom: 20px;
}

.blog-post-preview h3 {
  margin: 0;
  color: #007bff;
  text-decoration: none;
}

.blog-post-preview a {
  text-decoration: none;
}

.blog-post-preview a:hover h3 {
  text-decoration: underline;
}

.blog-post-preview p {
  margin-top: 5px;
}

</style>
