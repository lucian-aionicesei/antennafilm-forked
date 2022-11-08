<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted(){
    console.log('It mounts!!');
    // console.log(this.$root.$wp);
  },
  async asyncData ({ app, store, params }) {
    return { articles: await app.$wp.projects().perPage(20).param('lazy', true ).param( 'acf_format', 'standard')
      .then(function( response ) {
      console.log(response)
      // scope.projects = response;
    })
   }
  }
}
</script>
