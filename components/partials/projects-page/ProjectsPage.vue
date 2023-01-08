<template>
    <section class="w-screen flex items-center justify-center flex-col bg-secondary">
      <!-- <div class="projectsBubble -translate-y-1/2 -translate-x-1/2 absolute top-0 left-0 w-[500px] h-[500px] 2xl:w-[600px] 2xl:h-[600px] rounded-full z-20 pointer-events-none hidden lg:block" alt=""></div> -->
      <div ref="wavesContainer" class="wavesContainer pointer-events-none w-full h-full absolute top-0 left-0 hidden lg:flex items-center justify-center z-30">
              <div class="relative w-full h-full">
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
                  <!-- <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[900px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1050px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1200px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1400px]" src="../../../assets/images/layout/star.svg" alt="">
                  <img class="wave absolute origin-bottom-right -translate-y-2/4 -translate-x-2/4 w-[1700px]" src="../../../assets/images/layout/star.svg" alt=""> -->
              </div>
            </div>
      <div @mousemove="(e) => followMouse(e)" class="pt-32 px-0 md:px-16 relative">
        <div ref="projects" class="all-projects px-5 md:px-0 lg:px-[8vw] max-w-screen-2xl m-auto">
        <div class="project-container flex flex-col lg:grid px-5 md:px-0 pb-14 lg:pb-24">
            <nuxt-link to="/uber-commercial" class="aspect-video relative z-40 col-span-2">
              <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                  <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
              </div>
              <video data-type="project" loop muted class="h-full w-auto object-cover cursor-none" src="../../../assets/images/royal.mp4" alt="video"></video>
            </nuxt-link>
            <article class="pl-0 lg:pl-5 pt-5 lg:pt-0 flex justify-between items-center lg:block z-40">
              <section>
                <h2 class="pb-2 text-xl xl:text-2xl flex gap-x-2" v-html="splitText('The cocktail company')"></h2>
                <div class="details">
                  <p class="pb-2">The joy of being young</p>
                  <p class="font-bold">Copenhagen</p>
                </div>
              </section>
              <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see project</nuxt-link>
              </div>
            </article>
        </div>
        <div class="project-container flex flex-col lg:grid px-5 md:px-0 pb-14 lg:pb-24">
            <nuxt-link to="/uber-commercial" class="aspect-video relative z-40 col-span-2">
              <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                  <img class="h-full w-full object-cover" src="../../../assets/images/movie3.png" alt="video">
                  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
              </div>
              <video data-type="project" loop muted class="h-full w-auto object-cover cursor-none" src="../../../assets/images/uber.mp4" alt="video"></video>
            </nuxt-link>
            <article class="pl-0 lg:pl-5 pt-5 lg:pt-0 flex justify-between items-center lg:block z-40">
              <section>
                <h2 class="pb-2 text-xl xl:text-2xl flex gap-x-2" v-html="splitText('The cocktail company')"></h2>
                <div class="details">
                  <p class="pb-2">The joy of being young</p>
                  <p class="font-bold">Copenhagen</p>
                </div>
              </section>
              <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                  <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see project</nuxt-link>
              </div>
            </article>
        </div>
        <div class="project-container flex flex-col lg:grid px-5 md:px-0 pb-14 lg:pb-24">
            <nuxt-link to="/uber-commercial" class="aspect-video relative z-40 col-span-2">
              <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                  <img class="h-full w-full object-cover" src="../../../assets/images/movie4.png" alt="video">
                  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
              </div>
              <video data-type="project" loop muted class="h-full w-auto object-cover cursor-none" src="../../../assets/images/royal.mp4" alt="video"></video>
            </nuxt-link>
            <article class="pl-0 lg:pl-5 pt-5 lg:pt-0 flex justify-between items-center lg:block z-40">
              <section>
                <h2 class="pb-2 text-xl xl:text-2xl flex gap-x-2" v-html="splitText('The cocktail company')"></h2>
                <div class="details">
                  <p class="pb-2">The joy of being young</p>
                  <p class="font-bold">Copenhagen</p>
                </div>
              </section>
              <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                  <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see project</nuxt-link>
              </div>
            </article>
        </div>
        <div class="project-container flex flex-col lg:grid px-5 md:px-0 pb-14 lg:pb-24">
            <nuxt-link to="/uber-commercial" class="aspect-video relative z-40 col-span-2">
              <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                  <img class="h-full w-full object-cover" src="../../../assets/images/process2.png" alt="video">
                  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
              </div>
              <video data-type="project" loop muted class="h-full w-auto object-cover cursor-none" src="../../../assets/images/uber.mp4" alt="video"></video>
            </nuxt-link>
            <article class="pl-0 lg:pl-5 pt-5 lg:pt-0 flex justify-between items-center lg:block z-40">
              <section>
                <h2 class="pb-2 text-xl xl:text-2xl flex gap-x-2" v-html="splitText('The cocktail company')"></h2>
                <div class="details">
                  <p class="pb-2">The joy of being young</p>
                  <p class="font-bold">Copenhagen</p>
                </div>
              </section>
              <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                  <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see project</nuxt-link>
              </div>
            </article>
        </div>
        <div class="project-container flex flex-col lg:grid px-5 md:px-0 pb-14 lg:pb-24">
            <nuxt-link to="/uber-commercial" class="aspect-video relative z-40 col-span-2">
              <div class="img-overlay absolute w-full h-full transition-opacity duration-300">
                  <img class="h-full w-full object-cover" src="../../../assets/images/movie2.png" alt="video">
                  <div class="absolute top-0 h-full w-full bg-black opacity-40"></div>
              </div>
              <video data-type="project" loop muted class="h-full w-auto object-cover cursor-none" src="../../../assets/images/royal.mp4" alt="video"></video>
            </nuxt-link>
            <article class="pl-0 lg:pl-5 pt-5 lg:pt-0 flex justify-between items-center lg:block z-40">
              <section>
                <h2 class="pb-2 text-xl xl:text-2xl flex gap-x-2" v-html="splitText('The cocktail company')"></h2>
                <div class="details">
                  <p class="pb-2">The joy of being young</p>
                  <p class="font-bold">Copenhagen</p>
                </div>
              </section>
              <div class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                  <nuxt-link to="/uber-commercial" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">see project</nuxt-link>
              </div>
            </article>
        </div>
        </div>
      </div>
      <div class="companies w-screen bg-primary flex flex-col items-center">
        <div class="w-screen">
          <img class="w-screen h-auto z-0" src="../../../assets/images/layout/intersect-bottom.svg" alt="">
        </div>
        <div class="w-full flex overflow-hidden items-center justify-center gap-y-10 flex-wrap py-32 px-5 md:px-0 lg:px-[8vw] max-w-screen-2xl m-auto">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/holcim.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/distortion.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/iss.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/sweco.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/distortion.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/iss.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/holcim.png" alt="">
                <img class="px-10 max-h-[4.3rem] h-fit max-w-[220px] w-fit z-40" src="../../../assets/images/logos/sweco.png" alt="">
            </div>
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      textAnimation: this.$gsap.timeline(),
      followAnimation: this.$gsap.timeline(),
      rotateAnimation: this.$gsap.timeline(),
      playPromise: undefined,
    };
  },
  mounted() {
    this.videoInView();
    this.rotateFlower();
  },
  methods: {
    videoInView() {
      // First we select all the divs with class .project-container
      let projects = this.$refs.projects.querySelectorAll(".project-container");
      // Then we define our gsap timeline animation
      const tl = this.$gsap.timeline();

      projects.forEach((project) => {
        // for project each statement
        // console.log(project);

        tl.to(project, {
          scrollTrigger: {
            // The scroll trigger is each individual project
            trigger: project,
            start: "top center",
            end: "bottom center",
            // Call the functions for different stages of the scroll trigger
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
    },
    playVideo(project) {
      // console.log("ON ENTER", project);

      this.textAnimation = this.$gsap.timeline();
      let title = project.querySelectorAll("h2 span");
      let details = project.querySelector(".details");
      let button = project.querySelector(".link-button");
      let link = button.querySelector("a");
      let video = project.querySelector("video");
      let imageOverlay = project.querySelector(".img-overlay");

      imageOverlay.style.opacity = 0;
      this.playPromise = video.play();
      this.textAnimation.play();
      this.textAnimation.fromTo(
        title,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: "circ.out" },
        0.3
      );
      this.textAnimation.fromTo(
        details,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: "circ.out" },
        0.3
      );
      this.textAnimation.fromTo(
        button,
        { opacity: 0 },
        { opacity: 1, ease: "circ.out" },
        0.3
      );
      this.textAnimation.fromTo(
        link,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, ease: "circ.out" },
        0.3
      );
    },
    stopVideo(project) {
      // console.log("ON LEAVE", project);

      let video = project.querySelector("video");
      let imageOverlay = project.querySelector(".img-overlay");

      imageOverlay.style.opacity = 1;
      this.textAnimation.reverse();
      this.textAnimation.add(this.checkPromise(video));
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
    followMouse(event) {
      // console.log("clientX", event.clientX, "clientY", event.clientY);
      // console.log(this.$refs.wave);
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

      // waves.forEach((wave, index) => {
      //   // wave.style.left = `${event.clientX}px`;
      //   // wave.style.top = `${event.clientY}px`;

      //   this.followAnimation.to(wave, { x: event.clientX, y: event.clientY });
      // });
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
  },
};
</script>

<style lang="scss" scoped>
.all-projects {
  .project-container {
    grid-template-columns: 2fr 3fr 2fr;
  }
  .project-container:nth-child(even) article {
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 0 1.25rem 0 0;
    // text-align: right;

    // .link-button {
    //   border-right: 2px solid #35b597;
    //   border-left: 0;
    //   justify-content: end;
    // }
  }
}

.project-container:last-child {
  padding-bottom: 0;
}

.projectsBubble {
  background: radial-gradient(
    48.26% 48.26% at 50% 50%,
    #cecece 0%,
    #e3e3cc 50%,
    #ccb641 100%
  );
}

.companies {
  background: linear-gradient(180deg, #6700a6 0%, #171717 100%);
}
</style>