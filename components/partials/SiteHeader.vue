<template>
    <header class="site-header fixed flex items-center justify-between w-full h-16 px-10 md:px-16 font-inter font-bold text-sm z-50">
        <nuxt-link class="font-abril text-3xl w-20 h-auto" to="/"><img src="../../assets/images/logos/final_logo.svg" alt=""></nuxt-link>
        <nav class="hidden sm:block space-x-16 font-inter font-bold">
            <nuxt-link :class='currentPage === "/projects" && underlinedLink' to="/projects">Projects</nuxt-link>
            <nuxt-link :class='currentPage === "/about" && underlinedLink' to="/about">About</nuxt-link>
            <a href="#">Contact</a>
        </nav>
        <img class="sm:hidden block w-7" src="../../assets/images/layout/burger.svg" alt="">
    </header>
</template>

<script>
export default {
  data() {
    return {
      currentPage: this.$route.path,
    };
  },
  computed: {
    underlinedLink() {
      return "underline underline-offset-8 decoration-accent1";
    },
  },
  mounted() {
    console.log(this.currentPage);
  },
};
</script>

<!-- <style scoped>
header {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
        backdrop-filter: blur(3px);
    }
</style> -->