<template>
  <section class="relative w-screen overflow-hidden bg-primary">
      <div @click="sendSignal()" class="fatherContainer bg-black h-auto lg:h-screen flex lg:items-center relative">
        <video loop muted autoplay class="aspect-video absolute top-0 left-0 object-cover h-fit w-full z-0 hidden lg:block" src="../../../assets/images/Showreel.mp4" alt="video"></video>
        <div class="h-full w-full bg-black opacity-30 absolute top-0 left-0"></div>
          <img class="pointer-events-none absolute bottom-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-top.svg" alt="">
          <article class="grid grid-cols-3 bg-green-800w pt-0 pb-16 md:py-16 lg:pb-0 lg:pt-10 px-0 md:px-16 max-w-screen-2xl mx-auto">
                  <div class="flex flex-col justify-between px-5 md:px-0 lg:pr-[5vw] col-span-3 lg:col-span-1 relative">
                      <div class="pt-10 max-w-[400px] md:min-w-[350px]">
                        <p>Antenna Film is a Copenhagen and London-based digital content studio and full-service production company specialising in the creation and execution of content.</p>
                        <p>We are creatives, directors, producers, designers, and post-production artists committed to developing engaging, high-end multi-platform content for brands, agencies, and artists.</p>
                      </div>
                      <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                        <nuxt-link to="/about" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">About antenna</nuxt-link>
                      </div>
                  </div>
                  <div class="h-fit lg:h-full col-start-1 row-start-1 col-span-3 lg:col-start-2 lg:col-span-2 lg:pl-[5vw] flex justify-start items-center">
                      <video loop muted autoplay class="aspect-video object-cover h-fit w-full z-40 visible lg:hidden" src="../../../assets/images/Showreel.mp4" alt="video"></video>
                  </div>
          </article>
      </div>
      <logo-slider></logo-slider>
      <!-- <div class="projectsBubble -translate-y-1/2 -translate-x-1/2 absolute top-0 w-[500px] h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full z-20 pointer-events-none hidden" alt=""></div> -->
      <div ref="wavesContainer" class="wavesContainer pointer-events-none overflow-hidden origin-center w-full h-full absolute top-0 left-0 hidden lg:flex items-center justify-center z-30">
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
            </div>
          </div>
      <content-wrapper bgColor="dark">
          <!-- <img src="../../../assets/images/layout/neon-circle.png" class="absolute top-0 w-[1300px] h-[1600px]" alt=""> -->
          <div class="absolute pointer-events-none origin-top-left -rotate-90 md:-translate-x-5 lg:translate-x-0 translate-y-52 w-fit text-zinc-200 z-40" ref="selectedTitle">
            <h6>selected projects</h6>
            <div ref="underline" class="h-[1px] bg-zinc-500 scale-x-0 origin-top-left"></div>
          </div>
          <article @mousemove="(e) => followMouse(e)" @mouseenter="showSignal()" @mouseleave="hideSignal()" ref="projects" class="our-projects lg:grid px-5 md:px-0 lg:px-[8vw] gap-x-8 gap-y-20 pt-24 max-w-screen-2xl m-auto">
              <div class=" pointer-events-none">

              </div>
              <!-- <div class="relative h-fit z-40" ref="project" v-for="(project, index) in page.acf.selected_projects" :key="index"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                  <div class="project">
                  <div class="aspect-video relative z-40">
                      <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                          <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                          <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                      </div>
                      <video data-type="project" loop muted class="h-full w-auto object-cover" src="../../../assets/images/uber.mp4" alt="video"></video>
                  </div>
                  <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText(project.post_title, true)"></h2>
                  <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText(project.post_title)"></h6>
                  </div>
              </div> -->
              <div class="relative h-fit z-40" ref="project"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                  <nuxt-link to="/uber-commercial" class="project">
                  <div class="aspect-video relative z-40">
                      <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                          <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                          <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                      </div>
                      <video data-type="project" loop muted class="h-full w-auto object-cover" src="../../../assets/images/uber.mp4" alt="video"></video>
                  </div>
                  <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('Uber | Safer cities', true)"></h2>
                  <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('Uber | Safer cities')"></h6>
                </nuxt-link>
              </div>
              <div class="relative h-fit z-40"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                <nuxt-link to="/uber-commercial" class="project">
                  <div class="aspect-video relative z-40">
                      <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                          <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                          <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                      </div>
                      <video data-type="project" loop muted class="h-full w-auto object-cover" src="../../../assets/images/uber.mp4" alt="video"></video>
                  </div>
                  <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('Uber | Safer cities', true)"></h2>
                  <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('Uber | Safer cities')"></h6>
                </nuxt-link>
              </div>
              <div class="relative h-fit z-40"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                <nuxt-link to="/uber-commercial" class="project">
                  <div class="aspect-video relative z-40">
                      <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                          <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                          <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                      </div>
                      <video data-type="project" loop muted class="h-full w-auto object-cover" src="../../../assets/images/royal.mp4" alt="video"></video>
                  </div>
                  <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2" v-html="splitText('Mærsk | Company promo', true)"></h2>
                  <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-0" v-html="splitText('Mærsk | Company promo')"></h6>
                </nuxt-link>
              </div>
              <div class="relative h-fit z-40"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                <nuxt-link to="/uber-commercial" class="project">
                  <div class="aspect-video relative z-40">
                      <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                          <img class="h-full w-full object-cover" src="../../../assets/images/movie4.png" alt="video">
                          <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                      </div>
                      <video data-type="project" loop muted class="h-full w-auto object-cover" src="../../../assets/images/royal.mp4" alt="video"></video>
                  </div>
                  <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2 z-10" v-html="splitText('Nike | Product promo', true)"></h2>
                  <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('Nike | Product promo')"></h6>
                </nuxt-link>
              </div>
              <div class="relative z-40"  @mouseenter="(e) => {desktopSize && playVideo(e)}" @mouseleave="(e) => {desktopSize && stopVideo(e)}">
                <nuxt-link to="/uber-commercial" class="project">
                      <div class="aspect-video relative z-40">
                          <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                              <img class="h-full w-full object-cover" src="../../../assets/images/60sec.png" alt="video">
                              <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
                          </div>
                          <video data-type="project" loop muted class=" h-full w-auto object-cover" src="../../../assets/images/uber.mp4" alt="video"></video>
                      </div>
                      <h2 class="pt-2 pb-8 lg:py-0 font-bold lg:absolute lg:translate-y-[2.7rem] bottom-0 w-max text-lg sm:text-xl md:text-3xl text-zinc-300 flex gap-x-2 z-10" v-html="splitText('Antenna | 2022 reel', true)"></h2>
                      <h6 class="absolute bottom-0 origin-bottom-left rotate-[270deg] pb-1 text-neutral-500 flex gap-x-1 z-10" v-html="splitText('Antenna | 2022 reel')"></h6>
                    </nuxt-link>
              </div>
          </article>
      </content-wrapper>
      <div class="w-full bg-secondary">
          <div class="pb-20 pt-10 lg:pb-0 relative bg-secondary w-full max-w-screen-2xl m-auto px-0 md:px-16">
            <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                        <nuxt-link to="/projects" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">See more projects</nuxt-link>
            </div>
          </div>
      </div>
      <div class="bottom-wrapper overflow-hidden 2xl:pt-32 lg:py-0 w-screen relative z-0 flex items-end justify-center">
        <div class="lg:hidden absolute w-full h-full flex items-center justify-center">
          <img class="h-6 cursor-pointer" src="../../../assets/images/layout/left-arrow.svg" alt="">
          <div class="max-w-[400px] px-5 sm:px-10">
            <p v-text="reviews[0].comment"></p>
            <span v-text="reviews[0].name"></span>
          </div>
          <img class="h-6 cursor-pointer" src="../../../assets/images/layout/right-arrow.svg" alt="">
        </div>
          <img @mouseover="hideReview()" class="absolute top-0 left-0 w-screen h-auto z-0" src="../../../assets/images/layout/intersect-bottom.svg" alt="">
          <div @mousemove="(e) => followForReviews(e)" @mouseover="toggleReview()" class=" w-full relative -z-10 pb-5 sm:pb-20 lg:pb-40">
            <div class="relative h-[80px] sm:h-[100px] z-[-1]">
               <div class="opacity-20 hover:opacity-50 w-[150vw] h-[150vw] absolute origin-bottom left-1/2 bottom-0 rounded-full -translate-x-2/4">
              <img class="reviews-line pointer-events-none w-[150vw] h-[150vw] absolute origin-center bottom-0" src="../../../assets/images/layout/star2.svg" alt="">
              </div>
            </div>
            <div class="relative h-[80px] sm:h-[100px] z-[-2]">
               <div class="opacity-20 hover:opacity-50 w-[150vw] h-[150vw] absolute origin-bottom left-1/2 bottom-0 rounded-full -translate-x-2/4">
              <img class="reviews-line pointer-events-none w-[150vw] h-[150vw] absolute origin-center bottom-0" src="../../../assets/images/layout/star2.svg" alt="">
              </div>
            </div>
            <div class="relative h-[80px] sm:h-[100px] z-[-3]">
               <div class="opacity-20 hover:opacity-50 w-[150vw] h-[150vw] absolute origin-bottom left-1/2 bottom-0 rounded-full -translate-x-2/4">
              <img class="reviews-line pointer-events-none w-[150vw] h-[150vw] absolute origin-center bottom-0" src="../../../assets/images/layout/star2.svg" alt="">
              </div>
            </div>
            <div v-for="(review, index) in reviews" :key="index" :style="`z-index:-${index + 4}`" class="relative h-[50px] sm:h-[100px]">
               <div :data-index="index" class="opacity-20 hover:opacity-50 w-[150vw] h-[150vw] absolute origin-bottom left-1/2 bottom-0 rounded-full -translate-x-2/4">
              <img class="reviews-line pointer-events-none w-[150vw] h-[150vw] absolute origin-center bottom-0" src="../../../assets/images/layout/star2.svg" alt="">
              </div>
            </div>
          </div>
      </div>
       <div class="cursorContainer pointer-events-none z-30 absolute top-0 left-0 w-0 h-0 rounded-full origin-top-left hidden scale-0">
              <article class="reviewComment w-[500px] xl:w-[600px] ml-10 -translate-y-full">
                <p class="pb-4 mt-auto text-sm italic leading-loose" v-text="displayedReview.comment"></p>
                <span class=" font-semibold" v-text="displayedReview.name"></span>
              </article>
              <div class="dot w-3 h-3 rounded-full bg-white absolute top-0 left-0 -translate-x-2/4 -translate-y-2/4"></div>
      </div>
  </section>
</template>

<script>
import { useWindowSize } from "vue-window-size";
import ContentWrapper from "../../wrappers/ContentWrapper.vue";
import Waves from "./partials/Waves.vue";

export default {
  components: { ContentWrapper, Waves },
  props: {
    page: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      textAnimation: this.$gsap.timeline(),
      wavesAnimation: this.$gsap.timeline(),
      signalVisible: this.$gsap.timeline(),
      followAnimation: this.$gsap.timeline(),
      reviewsAnimation: this.$gsap.timeline(),
      rotateAnimation: this.$gsap.timeline(),
      reviewVisible: this.$gsap.timeline(),
      bubbleVisible: this.$gsap.timeline(),
      playPromise: undefined,
      reviews: [
        {
          name: "Marlene, Akva",
          comment:
            "We love antenna very good company. We are happy with the final result.",
        },
        {
          name: "Sylvia, Kea",
          comment:
            "We loved working side by side with Antenna for our product advertising campaign. They are a reliable, trustworthy and deliver on time.",
        },
        {
          name: "Marlene, Akva",
          comment:
            "We love antenna very good company. We are happy with the final result.",
        },
        {
          name: "Nicolai Wichmann | CEO, Frankly",
          comment:
            "We have worked closely with Philip and Tobias since 2015 and would happily recommend them to any of our clients. With their combination of creativity and professionalism, we feel confident in their ability to complete just about any film tasks that is put in front of them.",
        },
      ],
      displayedReview: {
        name: "",
        comment: "",
      },
    };
  },
  setup() {
    const width = useWindowSize().width;
    return {
      windowWidth: width,
    };
  },
  mounted() {
    // this.videoInView();
    // this.animateLogoSlider();
    // this.animateTitle();
    this.rotateFlower();
    console.log(this.$MotionPathPlugin);
    console.log(this.page);
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
            markers: false,
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
            markers: false,
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
      let waves = document.querySelectorAll(".wave");
      this.followAnimation = this.$gsap.timeline();
      let mm = this.$gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        this.followAnimation.to(waves, {
          x: event.pageX,
          y: event.pageY,
          stagger: { each: 0.05 },
        });
      });
    },
    showSignal() {
      let wavesContainer = document.querySelector(".wavesContainer");

      this.signalVisible = this.$gsap.timeline();
      let mm = this.$gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        this.signalVisible.to(
          wavesContainer,
          {
            display: "block",
            duration: 0,
          },
          0
        );
        this.signalVisible.to(
          wavesContainer,
          {
            scale: 1,
            duration: 0.8,
          },
          0
        );
      });
    },
    hideSignal() {
      let wavesContainer = document.querySelector(".wavesContainer");

      this.signalVisible = this.$gsap.timeline();

      this.signalVisible.to(
        wavesContainer,
        {
          scale: 0,
          duration: 0.8,
        },
        0
      );
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
    rotateFlower() {
      // console.log("send signal");
      let waves = document.querySelectorAll(".wave");
      this.rotateAnimation = this.$gsap.timeline();

      this.rotateAnimation.set(waves, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
      });

      this.rotateAnimation.to(waves, {
        rotate: -360,
        duration: 100,
        repeat: -1,
        ease: "none",
      });
    },
    followForProjects(event) {
      // console.log(event.target.getAttribute("data-type"));
      let bubble = document.querySelector(".projectsBubble");
      this.followAnimation = this.$gsap;
      let mm = this.$gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (event.target.getAttribute("data-type") === "project") {
          this.followAnimation.to(bubble, {
            scale: 1,
          });
        } else {
          this.followAnimation.to(bubble, {
            scale: 0.5,
          });
        }

        this.followAnimation.to(bubble, {
          x: event.pageX,
          y: event.pageY,
        });
      });
    },
    toggleBubble() {
      // console.log(event.target.getAttribute("data-type"));
      let bubble = document.querySelector(".projectsBubble");

      this.bubbleVisible = this.$gsap.timeline();
      let mm = this.$gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        this.bubbleVisible.to(
          bubble,
          {
            display: "block",
            duration: 0,
          },
          0
        );
        this.bubbleVisible.to(
          bubble,
          {
            scale: 1,
            duration: 0.8,
          },
          0
        );
      });
    },
    hideBubble() {
      // console.log("mouse is out");
      let bubble = document.querySelector(".projectsBubble");

      this.bubbleVisible = this.$gsap.timeline();

      this.bubbleVisible.to(
        bubble,
        {
          scale: 0,
          duration: 0.8,
        },
        0
      );
    },
    followForReviews(event) {
      // console.log(event.target.getAttribute("data-index"));
      let reviewsIndex = event.target.getAttribute("data-index")
        ? Number(event.target.getAttribute("data-index"))
        : null;
      let cursorContainer = document.querySelector(".cursorContainer");
      let mm = this.$gsap.matchMedia();

      if (reviewsIndex !== null) {
        this.displayedReview = {
          name: this.reviews[reviewsIndex].name,
          comment: this.reviews[reviewsIndex].comment,
        };
      }

      mm.add("(min-width: 1024px)", () => {
        this.reviewsAnimation = this.$gsap.timeline();

        this.reviewsAnimation.to(cursorContainer, {
          x: event.pageX,
          y: event.pageY,
        });
      });

      // console.log("clientX", event.pageX, "clientY", event.pageY);
    },
    toggleReview() {
      let cursorContainer = document.querySelector(".cursorContainer");
      this.reviewVisible = this.$gsap.timeline();

      this.reviewVisible.to(
        cursorContainer,
        {
          display: "block",
          duration: 0,
        },
        0
      );
      this.reviewVisible.to(
        cursorContainer,
        {
          scale: 1,
          duration: 0.8,
        },
        0
      );
    },
    hideReview() {
      let cursorContainer = document.querySelector(".cursorContainer");

      this.reviewVisible = this.$gsap.timeline();

      this.reviewVisible.to(
        cursorContainer,
        {
          scale: 0,
          duration: 0.8,
        },
        0
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

// .fatherContainer {
//   background: linear-gradient(180deg, rgba(0, 40, 253, 0) 0%, #0029ff 100%);
// }

.projectsBubble {
  background: radial-gradient(
    48.26% 48.26% at 50% 50%,
    #cecece 0%,
    #e3e3cc 50%,
    #ccb641 100%
  );
}

.reviews-container {
  grid-template-columns: 0.8fr 0.35fr 0.8fr 1fr;
}

.reviews-line {
  animation: spin 150s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
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