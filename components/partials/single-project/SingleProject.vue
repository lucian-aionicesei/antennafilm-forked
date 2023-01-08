<template>
    <section class="w-screen bg-secondary">
        <div class="h-fit flex items-center justify-center">
            <video autoplay controls class="aspect-video object-cover max-h-screen w-full z-0" src="../../../assets/images/royal.mp4" alt="video"></video>
        </div>
        <content-wrapper>
            <div class="flex justify-around w-full py-10 border-b-2 border-fuchsia-400">
                <div class="text-center">
                    <h6 class=" pb-3">client</h6>
                    <h3>Mærsk</h3>
                </div>
                <div class="text-center">
                    <h6 class=" pb-3">title</h6>
                    <h3>Be reborn</h3>
                </div>
                <div class="text-center">
                    <h6 class=" pb-3">year</h6>
                    <h3>2020</h3>
                </div>
            </div>
        </content-wrapper>
    </section>
</template>

<script>
import ContentWrapper from "../../wrappers/ContentWrapper.vue";
export default {
  components: { ContentWrapper },
};
</script>