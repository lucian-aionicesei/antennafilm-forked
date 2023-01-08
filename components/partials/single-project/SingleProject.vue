<template>
    <section class="w-screen bg-secondary">
        <div class="h-fit flex items-center justify-center">
            <video autoplay controls class="aspect-video object-cover max-h-screen w-full z-0" src="../../../assets/images/royal.mp4" alt="video"></video>
        </div>
        <content-wrapper>
            <div class="py-10 border-b-2 border-fuchsia-400">
                <div class="flex justify-between w-full px-5 sm:px-20">
                <div class="text-center">
                    <h6 class=" pb-3">client</h6>
                    <h3 class=" text-base md:text-3xl">Mærsk</h3>
                </div>
                <div class="text-center">
                    <h6 class=" pb-3">title</h6>
                    <h3 class=" text-base md:text-3xl">Be reborn</h3>
                </div>
                <div class="text-center">
                    <h6 class=" pb-3">year</h6>
                    <h3 class=" text-base md:text-3xl">2020</h3>
                </div>
            </div>
            </div>
        </content-wrapper>
        <content-wrapper>
            <div class="py-10 border-b-2 border-fuchsia-400">
                <div class="w-full px-5 sm:px-20">
                    <p>Lorem ipsum dolor sit amet sagittis pellentesque cursus eros ultricies turpis. Mattis maecenas mauris aliquet magna porttitor malesuada lacus mi ullamcorper elementum. Tortor facilisis labore semper ullamcorper tempor hac pellentesque risus fames enim platea luctus curabitur. Mollis ullamcorper sapien netus maecenas odio vulputate dictumst turpis hac. Mollis odio pulvinar nullam vulputate incididunt vitae leo dui.</p>
                </div>
                <div class="pt-10 px-5 md:px-16 relative bg-secondary flex flex-wrap gap-y-10 sm:gap-y-28 justify-center md:justify-start lg:grid grid-cols-2 gap-x-0 ">
                    <div class="flex w-full items-center justify-center">
                        <img class=" sm:max-w-sm aspect-square object-cover" src="../../../assets/images/oceanswimwear_still1.png" alt="our process">
                    </div>
                    <div class="flex w-full items-center justify-center">
                        <img class=" sm:max-w-sm aspect-square object-cover" src="../../../assets/images/oceanswimwear_still2.png" alt="our process">
                    </div>
                    <div class="flex w-full items-center justify-center">
                        <img class=" sm:max-w-sm aspect-square object-cover" src="../../../assets/images/oceanswimwear_still3.png" alt="our process">
                    </div>
                    <div class="flex w-full items-center justify-center">
                        <img class=" sm:max-w-sm aspect-square object-cover" src="../../../assets/images/oceanswimwear_still4.png" alt="our process">
                    </div>
                </div>
            <div class="pt-10">
                <div class="flex flex-wrap gap-y-8 justify-between w-full px-5 sm:px-20">
                <div>
                    <h6 class=" pb-3">producer</h6>
                    <h5 class=" text-base md:text-xl">Tobias Anders</h5>
                </div>
                <div>
                    <h6 class=" pb-3">director</h6>
                    <h5 class=" text-base md:text-xl">Philip Pfeiffer</h5>
                </div>
                <div>
                    <h6 class=" pb-3">sound design</h6>
                    <h5 class=" text-base md:text-xl">Kristine Boisen</h5>
                </div>
                <div>
                    <h6 class=" pb-3">editor</h6>
                    <h5 class=" text-base md:text-xl">Georg Hans</h5>
                </div>
                </div>
            </div>
            </div>
        </content-wrapper>
        <content-wrapper>
            <div class="w-full px-5 sm:px-20 flex items-center py-10">
                <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                  <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see next project</nuxt-link>
              </div>
              <p class="pb-0">Cocktail Factory</p>
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