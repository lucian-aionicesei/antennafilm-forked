<template>
    <footer class=" bg-secondary grid grid-cols-3 px-10 md:px-16 py-8">
      <section>
        <p>Borgergade 13, 2400 København S</p>
        <p>info@antennafilm.dk</p>
        <p>+4550304050</p>
      </section>
      <nav class="flex flex-col">
        <nuxt-link class="pb-5 leading-8" to="/projects">Projects</nuxt-link>
        <nuxt-link class="pb-5 leading-8" to="/about">About</nuxt-link>
        <a class="pb-5 leading-8">Contact</a>
      </nav>
      <nav>

      </nav>
    </footer>
</template>

<script>
export default {
  // data() {
  //   return {
  //     currentPage: this.$route.path,
  //   };
  // },
};
</script>