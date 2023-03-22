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
          title: "Blog Post 1",
          description: "This is the description of the first blog post.",
          slug: "blog-post-1",
        },
        {
          id: 2,
          title: "Blog Post 2",
          description: "This is the description of the second blog post.",
          slug: "blog-post-2",
        },
        {
          id: 3,
          title: "Blog Post 3",
          description: "This is the description of the third blog post.",
          slug: "blog-post-3",
        },
        {
          id: 4,
          title: "Blog Post 4",
          description: "This is the description of the fourth blog post.",
          slug: "blog-post-4",
        },
      ],
    };
  },
};
</script>
<style scoped>


</style>
