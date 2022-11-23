<template>
    <section>
        <div class="h-auto lg:h-screen flex lg:items-center relative">
            <img class="absolute bottom-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-top.svg" alt="">
            <article class="grid grid-cols-3 bg-green-800w pt-0 pb-16 md:py-16 lg:pb-0 lg:pt-10 px-0 md:px-16 max-w-screen-2xl mx-auto">
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
                        <img class="aspect-video object-cover h-fit w-full z-10" src="../../../assets/images/hero-img.png" alt="">
                    </div>
            </article>
        </div>
        <content-wrapper bgColor="dark">
            <div ref="logoSlider" class="flex lg:mx-[15vw] overflow-hidden items-center max-w-screen-xl m-auto pt-4 pb-10">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/distortion.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/holcim.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/iss.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/sweco.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/distortion.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/iss.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/holcim.png" alt="">
                <img class="pr-20 max-h-20 h-fit max-w-[220px] w-fit" src="../../../assets/images/logos/sweco.png" alt="">
            </div>
        </content-wrapper>
        <content-wrapper bgColor="dark">
            <!-- <div class="absolute h-72 w-72 rounded-full blur-xl bg-rose-300 top-1/4"></div> -->
            <!-- <h6>Selected Work</h6> -->
            <article ref="projects" class="our-projects lg:grid px-5 md:px-0 md:pl-5 lg:px-[8vw] gap-x-8 gap-y-14 pt-24 max-w-screen-2xl m-auto z-10">
                <div>

                </div>
                <div class="relative h-fit" ref="project"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/uber.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-20">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie4.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-10" v-html="splitText('collection', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('collection')"></h6>
                    </div>
                </div>
                <div class="relative"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                        <div class="aspect-video relative z-20">
                            <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                                <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                                <div class="absolute top-0 h-full w-full bg-black opacity-30"></div>
                            </div>
                            <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                        </div>
                        <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-2xl md:text-4xl flex gap-x-2 z-10" v-html="splitText('long title of the video', true)"></h2>
                        <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
            </article>
        </content-wrapper>
        <div class="bottom-wrapper h-screen w-screen relative z-0">
            <img class=" absolute top-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-bottom.svg" alt="">
        </div>
    </section>
</template>

<script>
import { useWindowSize } from 'vue-window-size';

export default {
    data() {
        return {
            textAnimation: this.$gsap.timeline(),
            playPromise: undefined,
            logosArray: [
                "distortion.png",
                "holcim.png",
                "iss.png",
                "sweco.png"
            ]
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
        this.animateLogoSlider();
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
            // let project = this.$refs.project;
            let projects = this.$refs.projects.querySelectorAll('.project');
            let gsap = this.$gsap;
            let mm = gsap.matchMedia();
            const tl = this.$gsap.timeline();

            projects.forEach(project => {
                mm.add('(max-width: 1024px)', () => {
                console.log('window size changed')
                
                tl.to(project, {scrollTrigger: {
                    trigger: project,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {this.playVideo(project)},
                    onLeave: () => {this.stopVideo(project)},
                    onEnterBack: () => {this.playVideo(project)},
                    onLeaveBack: () => {this.stopVideo(project)},
                    markers: false,
                },
            });
            });
            mm.add('(min-width: 1024px)', () => {
                this.stopVideo(project)
            })
            });
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
        },
        animateLogoSlider(){
            const gsap = this.$gsap;
            const logos = this.$refs.logoSlider.querySelectorAll('img');
            console.log(logos);

            const loop = this.horisontalLoop(logos, {
                paused: true,
                repeat: -1
            });

            loop.play(); 
            
            this.$ScrollTrigger.create({  
              start: 0,
              end: 'max',
              pin: '.container',
              onUpdate: function(self) {    
                self.direction === -1 ? loop.timeScale(-1) : loop.timeScale(1)    // onUpdate of the ST toggling direction of tween via changing its timeScale depending on direction of scroll
              }  
            })
        },
        horisontalLoop(items, config) {
            let gsap = this.$gsap;
            items = gsap.utils.toArray(items);
            config = config || {};

            let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
              length = items.length,
              startX = items[0].offsetLeft,
              times = [],
              widths = [],
              xPercents = [],
              curIndex = 0,
              pixelsPerSecond = (config.speed || 1) * 100,
              snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
              totalWidth, curX, distanceToStart, distanceToLoop, item, i;
            gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
              xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
              }
            });
            gsap.set(items, {x: 0});
            totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
            for (i = 0; i < length; i++) {
                item = items[i];
                curX = xPercents[i] / 100 * widths[i];
                distanceToStart = item.offsetLeft + curX - startX;
                distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                  .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
            }
            function toIndex(index, vars) {
                  vars = vars || {};
                  (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
                  let newIndex = gsap.utils.wrap(0, length, index),
                    time = times[newIndex];
                  if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
                    vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
                    time += tl.duration() * (index > curIndex ? 1 : -1);
                  }
                  curIndex = newIndex;
                  vars.overwrite = true;
                  return tl.tweenTo(time, vars);
                }
                tl.next = vars => toIndex(curIndex+1, vars);
                tl.previous = vars => toIndex(curIndex-1, vars);
                tl.current = () => curIndex;
                tl.toIndex = (index, vars) => toIndex(index, vars);
                tl.times = times;
                tl.progress(1, true).progress(0, true); // pre-render for performance
                if (config.reversed) {
                  tl.vars.onReverseComplete();
                  tl.reverse();
                }
            return tl;
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

.our-projects div:last-child .project  {
        position: absolute;
        top: 0;
        left: 0;
        // border: red solid 4px;
    }

.our-projects div:last-child .project  {
        position: static;
    }

.bottom-wrapper {
width: 1511px;
height: 675px;

background: linear-gradient(180deg, rgba(250, 199, 18, 0.54) 0%, rgba(152, 54, 187, 0.46) 29.17%, rgba(66, 22, 123, 0.6875) 54.69%, rgba(0, 0, 0, 0.5) 100%);
}

@media only screen and (min-width: 1024px) {
    .our-projects div:last-child .project  {
        position: absolute;
        top: 0;
        left: 0;
    }
}

@media only screen and (max-width: 1024px) {
    .our-projects h6 {
        visibility: hidden;
    }
}

</style>