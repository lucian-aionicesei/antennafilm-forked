<template>
  <main class="bg-primary">
      <!-- <front-page v-if="$route.path === '/'"></front-page> -->
      <projects-page v-if="$route.path === '/projects' || $route.path === '/projects/'"></projects-page>
      <single-project v-if="$route.path === '/uber-commercial' || $route.path === '/uber-commercial/'"></single-project>
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
  mounted() {
    // console.log(this.$route.path);
  },
};
</script>