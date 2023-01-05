<template>
    <section class="w-screen">
        <div class=" pt-16 sm:pt-24 lg:pt-0 px-0 md:px-16 relative lg:h-screen flex items-center justify-center">
            <div class="px-5 md:px-0 lg:px-[8vw] max-w-screen-2xl m-auto flex flex-col-reverse lg:grid grid-cols-2 gap-x-10">
                <article class="pt-10 sm:pt-20 lg:pt-0">
                    <p>We eat, sleep, and breathe content and have combined a traditional filmmaking approach with a fresh perspective on evolving digital mediums. Creating multi-platform content that is visually and narratively engaging is what we do best. We work across all platforms to engage the visual sense, always striving to create meaningful content and tell stories that inspire.</p>
                </article>
                <div class="h-full flex items-center">
                    <img class="h-fit aspect-video object-cover" src="../../../assets/images/studio.png" alt="studio image">
                </div>
            </div>
        </div>
        <div class="pt-32 px-5 md:px-16 relative bg-secondary lg:h-screen flex flex-wrap gap-y-10 justify-center md:justify-start lg:grid grid-cols-3 gap-x-10 ">
                <div class=" max-w-sm">
                    <img class="aspect-video object-cover" src="../../../assets/images/process1.png" alt="our process">
                    <article class="pt-10">
                        <h3 class="text-base font-bold">Concept</h3>
                        <p>Whether we’re executing on a detailed project brief, or developing a tailor-made solution fit to our clients’ immediate needs - we plan everything down to the smallest detail to ensure a smooth and well-coordinated shoot.</p>
                    </article>
                </div>
                <div class=" max-w-sm">
                    <img class="aspect-video object-cover" src="../../../assets/images/process2.png" alt="our process">
                    <article class="pt-10">
                        <h3 class="text-base font-bold">Shoot</h3>
                        <p>With our Netflix-approved camera package and decades of industry experience, we’ll be confident in lifting almost any film-related task you can put in front of us - and if we’re not, we’ll likely have someone in our network who can help us out.</p>
                    </article>
                </div>
                <div class=" max-w-sm">
                    <img class="aspect-video object-cover" src="../../../assets/images/process3.png" alt="our process">
                    <article class="pt-10">
                        <h3 class="text-base font-bold">Editing</h3>
                        <p>Our expertise within post-production includes editing, colour correction, sound design, VFX, motion graphics and much more. Whether we’re delivering a DCP for cinema viewing or a campaign series for your social media channels, we strive to deliver the highest quality - always on time.</p>
                    </article>
                </div>
        </div>
        <div class=" py-16 sm:pt-24 lg:pt-0 px-0 md:px-16 relative lg:h-screen flex items-center justify-center">
            <div class="px-5 md:px-0 lg:px-[8vw] max-w-screen-2xl m-auto flex flex-col-reverse lg:grid grid-cols-2 gap-x-10">
                <form class="pt-10 sm:pt-20 lg:pt-0 cursor-all-scroll flex flex-col font-inter text-sm font-bold">
                    <label class="flex flex-col pb-5" for="name">
                        Name
                        <input class="max-w-sm mt-1 bg-zinc-700 h-8" type="text" name="name" id="name">
                    </label>
                    <label class="flex flex-col pb-5" for="email">
                        Email
                        <input class="max-w-sm mt-1 bg-zinc-700 h-8" type="email" name="email" id="email">
                    </label>
                    <label class="flex flex-col pb-5" for="text">
                        Do you want to discuss?
                        <input class="max-w-sm mt-1 bg-zinc-700 h-32" type="text" name="text" id="text">
                    </label>
                    <button class="link-button flex items-center border-l-2 border-accent1 h-10 overflow-hidden">
                        <a href="#" class="px-4 font-bold h-full hover:bg-accent1 flex items-center">contact</a>
                    </button>
                </form>
                <div class="h-full flex items-center">
                    <img class="h-fit aspect-video object-cover" src="../../../assets/images/contact_us.png" alt="studio image">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>