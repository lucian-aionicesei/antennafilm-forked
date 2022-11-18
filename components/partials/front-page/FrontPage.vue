<template>
    <section>
        <content-wrapper>
            <div class="h-auto lg:h-screen flex lg:items-center max-w-screen-2xl m-auto">
                <article class="grid grid-cols-3 bg-green-800w py-0 md:py-16 lg:pb-0 lg:pt-10">
                    <div class="flex flex-col justify-between px-5 md:px-0 lg:pr-[5vw] col-span-3 lg:col-span-1 relative">
                        <div class="pt-10 max-w-[400px] md:min-w-[350px]">
                            <p>We’re a video agency with roots in Copenhagen and London.</p>
                            <p>With a combined 20 years of experience working within online marketing, internal communication, and content production, we offer end-to-end video production services exclusively tailored to our clients’ needs.</p>
                        </div>
                        <div class="flex items-center border-l-2 border-accent1 h-10">
                            <a href="#" class="pl-4 font-bold">more about us</a>
                        </div>
                    </div>
                    <div class="h-fit lg:h-full col-start-1 row-start-1 col-span-3 lg:col-start-2 lg:col-span-2 lg:pl-[5vw] flex justify-start items-center">
                        <img class="aspect-video object-cover h-fit w-full" src="../../../assets/images/hero-img.png" alt="">
                    </div>
                </article>
            </div>
        </content-wrapper>
        <content-wrapper bgColor="dark">
            <!-- <div class="absolute h-72 w-72 rounded-full blur-xl bg-rose-300 top-1/4"></div> -->
            <article class="our-projects lg:grid px-5 md:px-0 md:pl-5 lg:px-[8vw] gap-x-8 gap-y-14 py-20 max-w-screen-2xl m-auto">
                <div>

                </div>
                <div class="relative">
                    <div class="aspect-video relative">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video @mouseenter="(e) => mouseOver(e)" @mouseleave="(e) => mouseOut(e)" loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <!-- <iframe class="aspect-video object-cover" title="vimeo-player" src="https://player.vimeo.com/video/391496725?h=51a2b8bb72" width="640" height="253" frameborder="0" allowfullscreen></iframe> -->
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500">title of video</h6>
                </div>
                <div class="relative h-fit aspect-video mb-12 sm:mb-20 lg:mb-0">
                    <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                        <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                        <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                    </div>
                    <video @mouseenter="(e) => mouseOver(e)" @mouseleave="(e) => mouseOut(e)" loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    <!-- <iframe class="aspect-video object-cover" title="vimeo-player" src="https://player.vimeo.com/video/391496725?h=51a2b8bb72" width="640" height="253" frameborder="0" allowfullscreen></iframe> -->
                    <h2 class="font-bold absolute translate-y-[2rem] md:translate-y-[2.7rem] bottom-0 w-max text-base sm:text-2xl md:text-4xl">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500">title of video</h6>
                </div>
                <div class="relative h-fit lg:aspect-video mb-12 sm:mb-20 lg:mb-0">
                    <!-- <img class="aspect-video object-cover" src="../../../assets/images/movie3.png" alt="video"> -->
                    <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                        <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                        <div class="absolute top-0 h-full w-full bg-black opacity-20"></div>
                    </div>
                    <video @mouseenter="(e) => mouseOver(e)" @mouseleave="(e) => mouseOut(e)" loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/uber.mp4" alt="video"></video>
                    <h2 class="font-bold absolute translate-y-[2rem] md:translate-y-[2.7rem] bottom-0 w-max text-base sm:text-4xl">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1  text-neutral-500">title of video</h6>
                </div>
                <div class="relative h-fit aspect-video mb-12 sm:mb-20 lg:mb-0">
                    <!-- <img class="aspect-video object-cover" src="../../../assets/images/movie3.png" alt="video"> -->
                    <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                        <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                        <div class="absolute top-0 h-full w-full bg-black opacity-20"></div>
                    </div>
                    <video @mouseenter="(e) => mouseOver(e)" @mouseleave="(e) => mouseOut(e)" loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/uber.mp4" alt="video"></video>
                    <h2 class="font-bold absolute translate-y-[2rem] md:translate-y-[2.7rem] bottom-0 w-max text-base sm:text-4xl">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1  text-neutral-500">title of video</h6>
                </div>
                <div class="relative h-fit">
                    <img class="aspect-video object-cover" src="../../../assets/images/hero-img.png" alt="video">
                    <h2 class="font-bold absolute translate-y-[2.7rem] bottom-0 w-max">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1  text-neutral-500">title of video</h6>
                </div>
                <div class="relative h-fit">
                    <img class="aspect-video object-cover" src="../../../assets/images/movie2.png" alt="video">
                    <h2 class="font-bold absolute translate-y-[2.7rem] bottom-0 w-max">title of video</h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1  text-neutral-500">title of video</h6>
                </div>
            </article>
            <h6 class="rotate-[270deg] origin-top-left top-0">Selected Work</h6>
        </content-wrapper>
        <content-wrapper>
            <div>

            </div>
        </content-wrapper>
    </section>
</template>

<script>

export default {
    methods: {
        mouseOver(event){
            console.log('mouse is on top')
            // console.log(event)
            event.target.previousElementSibling.style.opacity = 0;
            event.target.play()
        },
        mouseOut(event){
            console.log('MOUSE OUT')
            event.target.previousElementSibling.style.opacity = 1
            event.target.pause()
            // setTimeout(() => {
            //     console.log('pause the video')
            //     event.target.pause();
            // }, 300)
        }
    }
}

</script>

<style scoped lang="scss">


.our-projects {
    grid-template-columns: 2fr 1fr 2fr;

    div:nth-child(4n + 2) {
        grid-column: span 2 / span 2;
    }

    div:nth-child(4n + 3) {
        grid-column: span 2 / span 2;
    }
}

// @media only screen and (min-width: 1024px) {
//     .our-projects video:hover ~ h6, .our-projects h2 {
//         visibility: hidden;
//     }

//     .our-projects video:hover ~ h2, .our-projects h6 {
//         visibility: visible;
//     }
// }

@media only screen and (max-width: 1024px) {
    .our-projects h6 {
        visibility: hidden;
    }
}

</style>