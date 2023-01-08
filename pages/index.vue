<template>
  <front-page :page="page"></front-page>
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
    // const response = await app.$wp
    //   .pages()
    //   .param("path", "uber-commercial")
    //   .param("lazy", true)
    //   .param("acf_format", "standard");

    // const response = await app.$wp.projects();

    const response = await app.$wp
      .pages()
      .param("path", "front-page")
      .param("lazy", true)
      .param("acf_format", "standard");
    // .embed();

    // const response = await app.$wp.companies();

    console.log(response);
    if (response && response.length > 0) {
      scope.page = response[0];
    } else {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  mounted() {
    console.log(this.page);
  },
};
</script>