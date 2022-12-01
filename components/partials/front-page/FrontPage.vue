<template>
    <section>
        <div @mousemove="(e) => followMouse(e)" @click="sendSignal()" class="h-auto lg:h-screen flex lg:items-center relative">
            <!-- <waves class="absolute top-0 w-full"></waves> -->
            <div ref="wavesContainer" class=" overflow-hidden w-full h-full absolute flex items-center justify-center">
              <div class=" overflow-hidden relative w-full h-full">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[50px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[100px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[150px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[200px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[250px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[300px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[350px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[400px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[450px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[500px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[550px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[600px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[650px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[725px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[800px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[900px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1050px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1200px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1400px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1700px]" src="../../../assets/images/layout/star.svg" alt="">
              </div>
              <!-- <div class="relative w-full h-full">
                  <img class="absolute top-0 left-24 w-[300px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute top-0 left-20 w-[400px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute top-0 left-16 w-[500px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-5 left-14 w-[600px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-6 left-12 w-[700px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-7 left-8 w-[800px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-8 left-4 w-[900px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-9 left-2 w-[1000px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-10 left-0 w-[1100px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-11 left-0 w-[1200px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-12 left-0 w-[1300px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-14 left-0 w-[1400px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-16 left-0 w-[1500px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="absolute -top-20 left-0 w-[1600px]" src="../../../assets/images/layout/star.svg" alt="">
              </div> -->
              <!-- <div class="relative w-full h-full">
                <img class="absolute -top-28 -left-32 w-[1000px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-32 w-[900px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-32 w-[800px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-28 w-[700px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-20 w-[600px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-16 w-[500px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 -left-10 w-[400px]" src="../../../assets/images/layout/star.svg" alt="">
                <img class="absolute -top-28 w-[300px]" src="../../../assets/images/layout/star.svg" alt="">
              </div> -->
            </div>
            <img class="pointer-events-none absolute bottom-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-top.svg" alt="">
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
        <!-- <logo-slider></logo-slider> -->
        <content-wrapper bgColor="dark">
            <!-- <img src="../../../assets/images/layout/neon-circle.png" class="absolute top-0 w-[1300px] h-[1600px]" alt=""> -->
            <div class="absolute origin-top-left -rotate-90 translate-y-52 w-fit text-zinc-200" ref="selectedTitle">
              <h6>selected projects</h6>
              <div ref="underline" class="h-[1px] bg-zinc-500 scale-x-0 origin-top-left"></div>
              <div ref="underline2" class="h-[1px] bg-white scale-x-0 origin-top-left"></div>
            </div>
            <article ref="projects" class="our-projects lg:grid px-5 md:px-0 lg:px-[8vw] gap-x-8 gap-y-14 pt-24 max-w-screen-2xl m-auto z-10">
                <div>

                </div>
                <div class="relative h-fit" ref="project"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/uber.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-10">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('long title of the video', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
                <div class="relative h-fit"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                    <div class="aspect-video relative z-20">
                        <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                            <img class="h-full w-full object-cover" src="../../../assets/images/movie4.png" alt="video">
                            <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                        </div>
                        <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                    </div>
                    <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2 z-10" v-html="splitText('collection', true)"></h2>
                    <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('collection')"></h6>
                    </div>
                </div>
                <div class="relative"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                    <div class="project">
                        <div class="aspect-video relative z-20">
                            <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                                <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                                <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                            </div>
                            <video loop muted class="h-full w-auto object-cover" src="http://localhost:10018/wp-content/uploads/2022/11/60-Second-Cut.mp4" alt="video"></video>
                        </div>
                        <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2 z-10" v-html="splitText('long title of the video', true)"></h2>
                        <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('long title of the video')"></h6>
                    </div>
                </div>
            </article>
        </content-wrapper>
        <div class="w-full bg-secondary">
            <div class="pb-20 pt-10 lg:pb-0 relative bg-secondary w-full max-w-screen-2xl m-auto px-0 md:px-16">
                <div class="flex items-center border-l-2 border-accent1 h-10 lg:absolute z-20 lg:translate-y-32 ml-5 md:ml-0">
                    <p @click="animateReviews()" class="pl-4 font-bold cursor-pointer">see more work</p>
                </div>
            </div>
        </div>
        <div class="bottom-wrapper py-16 lg:py-0 lg:h-screen w-screen relative z-0 flex items-end justify-center">
            <img class="hidden lg:block pointer-events-none absolute top-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-bottom.svg" alt="">
            <div class="reviews-container flex flex-col gap-y-16 justify-center lg:grid w-full h-full -z-10 max-w-screen-xl px-5 md:px-16 lg:px-0">
                <div class=" text-right relative">
                    <div ref="review" class="lg:absolute right-0 flex flex-col h-[55%] lg:border-r-[0.5px] border-zinc-400 w-fit pr-4">
                          <p class=" max-w-xs pb-4 mt-auto">We love antenna very good company. We are happy with the final result.</p>
                          <span class=" font-semibold text-sm">Marlene, AKVA</span>
                        <div class="hidden lg:block h-1 w-1 bg-white rounded-full absolute bottom-0 right-0 translate-x-[2px]"></div>
                    </div>
                </div>
                <div class=" lg:text-right relative">
                    <div class="lg:absolute right-0 flex flex-col h-5/6 lg:border-r-[0.5px] border-zinc-400 w-fit pr-4 ml-auto">
                        <p class=" max-w-xs pb-4 mt-auto sm:w-max">We love antenna very good company. We are happy with the final result.</p>
                        <span class=" font-semibold text-sm">Marlene, AKVA</span>
                        <div class="hidden lg:block h-1 w-1 bg-white rounded-full absolute bottom-0 right-0 translate-x-[2px]"></div>
                    </div>
                </div>
                <div class=" text-right relative">
                    <div class="lg:absolute right-0 flex flex-col h-4/6 lg:border-r-[0.5px] border-zinc-400 w-fit pr-4">
                        <p class=" max-w-xs pb-4 mt-auto sm:w-max">We love antenna very good company. We are happy with the final result.</p>
                        <span class=" font-semibold text-sm">Marlene, AKVA</span>
                        <div class="hidden lg:block h-1 w-1 bg-white rounded-full absolute bottom-0 right-0 translate-x-[2px]"></div>
                    </div>
                </div>
                <div class="relative">
                    <div class="lg:absolute right-0 flex flex-col h-5/6 lg:border-l-[0.5px] border-zinc-400 w-fit lg:pl-4 ml-auto">
                        <p class=" max-w-xs pb-4 mt-auto">We love antenna very good company. We are happy with the final result.</p>
                        <span class=" font-semibold text-sm">Marlene, AKVA</span>
                        <div class="hidden lg:block h-1 w-1 bg-white rounded-full absolute bottom-0 left-0 -translate-x-[2px]"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useWindowSize } from "vue-window-size";
import ContentWrapper from "../../wrappers/ContentWrapper.vue";

export default {
  components: { ContentWrapper },
  data() {
    return {
      textAnimation: this.$gsap.timeline(),
      wavesAnimation: this.$gsap.timeline(),
      followAnimation: this.$gsap.timeline(),
      playPromise: undefined,
    };
  },
  setup() {
    const width = useWindowSize().width;
    return {
      windowWidth: width,
    };
  },
  mounted() {
    this.videoInView();
    // this.animateLogoSlider();
    this.animateTitle();
  },
  computed: {
    desktopSize() {
      return this.windowWidth >= 1024 ? true : false;
    },
  },
  methods: {
    playVideo(event) {
      if (event.type === "mouseenter" || event.type === "mouseleave") {
        event = event.target;
      }
      this.textAnimation = this.$gsap.timeline();
      let smallTitle = event.querySelectorAll("h6 span");
      let title = event.querySelectorAll("h2 span");
      let video = event.querySelector("video");
      let imageOverlay = event.querySelector(".img-overlay");

      imageOverlay.style.opacity = 0;
      this.playPromise = video.play();
      this.textAnimation.play();
      this.textAnimation.fromTo(
        smallTitle,
        { color: "rgb(115 115 115)", y: 0, opacity: 1 },
        { color: "white", y: 30, opacity: 0, stagger: 0.08, ease: "circ.in" },
        0
      );
      this.textAnimation.fromTo(
        title,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: "circ.out" },
        0.3
      );
    },
    stopVideo(event) {
      // console.log(event)
      if (event.type === "mouseenter" || event.type === "mouseleave") {
        event = event.target;
      }
      let video = event.querySelector("video");
      let imageOverlay = event.querySelector(".img-overlay");

      imageOverlay.style.opacity = 1;
      this.textAnimation.reverse();
      this.textAnimation.add(this.checkPromise(video));
    },
    splitText(string, opaque) {
      let stringArray = string.split(" ");
      let newString = "";
      stringArray.forEach((element) => {
        newString =
          newString +
          `<span class="block ${opaque && "opacity-0"}">${element} </span>`;
      });
      return newString;
    },
    videoInView() {
      // let project = this.$refs.project;
      let projects = this.$refs.projects.querySelectorAll(".project");
      let gsap = this.$gsap;
      let mm = gsap.matchMedia();
      const tl = this.$gsap.timeline();

      projects.forEach((project) => {
        mm.add("(max-width: 1024px)", () => {
          tl.to(project, {
            scrollTrigger: {
              trigger: project,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                this.playVideo(project);
              },
              onLeave: () => {
                this.stopVideo(project);
              },
              onEnterBack: () => {
                this.playVideo(project);
              },
              onLeaveBack: () => {
                this.stopVideo(project);
              },
              markers: false,
            },
          });
        });
        mm.add("(min-width: 1024px)", () => {
          this.stopVideo(project);
        });
      });
    },
    checkPromise(video) {
      if (this.playPromise !== undefined) {
        this.playPromise
          .then((_) => {
            // Automatic playback started!
            // Show playing UI.
            // We can now safely pause video...
            video.pause();
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
          });
      }
    },
    animateTitle() {
      let title = this.$refs.selectedTitle;
      let projects = this.$refs.projects;
      let gsap = this.$gsap.timeline();
      let underline = this.$refs.underline;
      let underline2 = this.$refs.underline2;

      gsap.to(
        title,
        {
          scrollTrigger: {
            trigger: projects,
            start: "top-=200px top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
          },
          y: "120vh",
          ease: "none",
          duration: 1,
        },
        0
      );
      gsap.to(
        underline,
        {
          scrollTrigger: {
            trigger: projects,
            start: "top-=200px top",
            end: "bottom bottom",
            markers: true,
            scrub: true,
            onToggle: (self) => {
              // console.log("progress", self.progress);
              // console.log("direction:", self.direction);
              console.log("toggled to active:", self.isActive);
              // self.style.transform = "scaleX(0)";
              // underline.style.transform = "scaleX(0)";
            },
          },
          scaleX: 4,
          duration: 1,
        },
        0
      );
      gsap.to(
        underline,
        {
          scaleX: 0,
          // duration: 1,
        },
        0
      );
    },
    animateReviews() {
      let review = this.$refs.review;
      // let
      let tl = this.$gsap.timeline();

      tl.from(review, {
        height: 0,
      });
    },
    followMouse(event) {
      console.log("clientX", event.clientX, "clientY", event.clientY);
      console.log(this.$refs.wave);
      let waves = document.querySelectorAll(".wave");
      this.followAnimation = this.$gsap.timeline();

      this.followAnimation.to(waves, {
        x: event.clientX,
        y: event.clientY,
        stagger: { each: 0.05 },
      });

      // waves.forEach((wave, index) => {
      //   // wave.style.left = `${event.clientX}px`;
      //   // wave.style.top = `${event.clientY}px`;

      //   this.followAnimation.to(wave, { x: event.clientX, y: event.clientY });
      // });
    },
    sendSignal() {
      console.log("send signal");
      let waves = document.querySelectorAll(".wave");
      this.wavesAnimation = this.$gsap.timeline();

      this.wavesAnimation.fromTo(
        waves,
        { opacity: 0 },
        { opacity: 1, duration: 0.1, stagger: { each: 0.02 } }
      );
    },
  },
};
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

.our-projects div:last-child .project {
  position: absolute;
  top: 0;
  left: 0;
  // border: red solid 4px;
}

.our-projects div:last-child .project {
  position: static;
}

.bottom-wrapper {
  background: linear-gradient(
    180deg,
    rgba(250, 199, 18, 0.54) 0%,
    rgba(152, 54, 187, 0.46) 29.17%,
    rgba(66, 22, 123, 0.6875) 54.69%,
    rgba(0, 0, 0, 0.5) 100%
  );
}

.reviews-container {
  grid-template-columns: 0.8fr 0.35fr 0.8fr 1fr;
}

@media only screen and (min-width: 1024px) {
  .our-projects div:last-child .project {
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