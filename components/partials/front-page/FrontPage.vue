<template>
    <section>
        <content-wrapper>
            <div class="h-auto lg:h-screen flex lg:items-center max-w-screen-2xl m-auto">
                <article class="grid grid-cols-3 bg-green-800w pt-0 pb-16 md:py-16 lg:pb-0 lg:pt-10">
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
            <h6>Selected Work</h6>
            <article ref="projects" class="our-projects lg:grid px-5 md:px-0 md:pl-5 lg:px-[8vw] gap-x-8 gap-y-14 py-20 max-w-screen-2xl m-auto">
                <div>

                </div>
                <div class="relative h-fit" ref="project"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/uber.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie4.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-0" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                </div>
            </article>
        </content-wrapper>
        <content-wrapper>
            <div>

            </div>
        </content-wrapper>
    </section>
</template>

<script>
import { useWindowSize } from 'vue-window-size';

export default {
    data() {
        return {
            textAnimation: this.$gsap.timeline(),
            playPromise: undefined,
            // windowWidth: useWindowSize().width.value,
        }
    },
    setup() {
        const width = useWindowSize().width;
            return {
              windowWidth: width,
            };
    },
    mounted() {
        this.videoInView();
    },
    computed: {
        desktopSize(){
            return this.windowWidth >= 1024 ? true : false
        }
    },
    methods: {
        playVideo(event){
            if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                event = event.target;
            }
            this.textAnimation = this.$gsap.timeline();
            let smallTitle = event.querySelectorAll('h6 span');
            let title = event.querySelectorAll('h2 span');
            let video = event.querySelector('video');
            let imageOverlay = event.querySelector('.img-overlay');

            imageOverlay.style.opacity = 0;
            this.playPromise = video.play();
            this.textAnimation.play();
            this.textAnimation.fromTo(smallTitle, {color: 'rgb(115 115 115)', y: 0, opacity: 1}, {color: 'white', y: 30, opacity: 0, stagger: 0.08, ease: "circ.in"}, 0);
            this.textAnimation.fromTo(title, {y: -50, opacity: 0}, {y: 0, opacity: 1, stagger: 0.08, ease: "circ.out"}, 0.3);
        },
        stopVideo(event){
            // console.log(event)
            if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                event = event.target;
            }
            let video = event.querySelector('video');
            let imageOverlay = event.querySelector('.img-overlay');

            imageOverlay.style.opacity = 1;
            this.textAnimation.reverse();
            this.textAnimation.add(this.checkPromise(video));
        },
        splitText (string, opaque){
            let stringArray = string.split(' ');
            let newString = '';
            stringArray.forEach(element => {
                newString = newString + `<span class="block ${opaque && 'opacity-0'}">${element} </span>`;
            });
            return newString;
        },
        videoInView(){
            console.log(this.$refs.project)
            let project = this.$refs.project;
            let gsap = this.$gsap;
            let mm = gsap.matchMedia();
            const tl = this.$gsap.timeline();
            
            mm.add('(max-width: 1024px)', () => {
                console.log('window size changed')
                
                tl.to(project, {scrollTrigger: {
                    trigger: project,
                    start: 'top center',
                    end: 'top top',
                    onEnter: () => {this.playVideo(project)},
                    onLeave: () => {this.stopVideo(project)},
                    onEnterBack: () => {this.playVideo(project)},
                    onLeaveBack: () => {this.stopVideo(project)},
                    markers: true,
                },
            });
            });
            mm.add('(min-width: 1024px)', () => {
                this.stopVideo(project)
            })
        },
        checkPromise(video) {
            if (this.playPromise !== undefined) {
                        this.playPromise.then(_ => {
                        // Automatic playback started!
                        // Show playing UI.
                        // We can now safely pause video...
                        video.pause();
                    })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                        });
                }
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

@media only screen and (max-width: 1024px) {
    .our-projects h6 {
        visibility: hidden;
    }
}

</style>