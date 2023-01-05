<template>
  <main class="bg-primary">
      <!-- <front-page v-if="$route.path === '/'"></front-page> -->
      <projects-page v-if="$route.path === '/projects' || $route.path === '/projects/'"></projects-page>
      <about-page v-if="$route.path === '/about' || $route.path === '/about/'"></about-page>
  </main>
</template>

<script>
export default {
  data() {
    return {
      page: null,
    };
  },
  async fetch() {
    const scope = this;
    const { error, app, store } = this.$nuxt.context;
    // console.log(this.$nuxt.context);
    console.log(scope.$route.path);
    console.log(app.$wp.projects());
    const response = await app.$wp
      .pages()
      .param("path", scope.$route.path)
      .param("lazy", true)
      .param("acf_format", "standard");

    console.log(response);
    if (response && response.length > 0) {
      scope.page = response[0];
    } else {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>