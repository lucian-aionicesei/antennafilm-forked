<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      projects: Object,
    }
  },
  mounted(){
    console.log('It mounts!!');
    // console.log(this.$root.$wp);
    // console.log(this);
  },
  async asyncData ({ app, store, params }) {
    // const scope = this;
    // console.log(scope);
    return { articles: await app.$wp.projects().perPage(20).param('lazy', true ).param( 'acf_format', 'standard')
      .then(( response ) => {
      console.log(response)
      this.projects = response;
      console.log(this)
    })
    .catch((error) => {
      console.log(error);
    })
    }
  }
}
</script>
