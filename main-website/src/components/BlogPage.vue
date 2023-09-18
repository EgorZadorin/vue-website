<template>
  <div class="content">
    <h2>Blog</h2>
    <div class="content-inner">
      <BlogPostPreview v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import BlogPostPreview from "@/components/BlogPostPreview.vue";

export default {
  name: "BlogPage",
  components: {
    BlogPostPreview,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "SFTP transition article",
          description: "Coming soon...",
          slug: "blog-post-1",
        },
        {
          id: 2,
          title: "Data Mining article",
          description: "Coming soon...",
          slug: "blog-post-2",
        },
        {
          id: 3,
          title: "AWS Lambda Cold Start article",
          description: "Coming soon...",
          slug: "blog-post-3",
        },
      ],
    };
  },
};
</script>
<style scoped>


</style>
