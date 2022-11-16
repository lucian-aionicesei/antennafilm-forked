<template>
    <header class="site-header fixed flex items-center justify-between w-full h-16 px-10 md:px-16 font-inter font-bold text-sm z-20">
        <a href="#">Antenna</a>
        <nav class="space-x-16 font-inter font-bold">
            <nuxt-link :class='currentPage === "/work" && underlinedLink' to="/work">Work</nuxt-link>
            <nuxt-link :class='currentPage === "/about" && underlinedLink' to="/about">About</nuxt-link>
            <a href="#">Contact</a>
        </nav>
    </header>
</template>

<script>
export default {
    data(){
        return {
            currentPage: this.$route.path
        }
    },
    computed: {
        underlinedLink(){
            return 'underline underline-offset-8 decoration-accent1';
        }
    },
    mounted() {
        // console.log(this.currentPage)
    }
}
</script>

<style scoped>

    header {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0) 100%);
        backdrop-filter: blur(3px);
    }

</style>