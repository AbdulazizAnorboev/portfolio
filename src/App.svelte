<script lang="ts">
  import { onMount } from 'svelte';
  import About from './components/About.svelte';
  import Contact from './components/Contact.svelte';
  import Header from './components/Header.svelte';
  import SidebarNav from './components/Nav.svelte';
  import Publication from './components/Publication.svelte';
  import Resume from './components/Resume.svelte';
  import Techs from './components/Techs.svelte';
  import Work from './components/Work.svelte';

  let activeSection = '';
  let sectionElements: { id: string; offset: number }[] = [];

  const sectionIds = [
    'about',
    'techs',
    'portfolio',
    'publication',
    'resume',
    'contact',
  ];

  function updateSections() {
    sectionElements = sectionIds.map((id) => {
      const el = document.getElementById(id);
      return {
        id,
        offset: el?.offsetTop ?? 0,
      };
    });
  }

  onMount(() => {
    setTimeout(() => {
      updateSections();
      window.addEventListener('resize', updateSections);
    }, 100);

    const onScroll = () => {
      const scrollY = window.scrollY + 100; // Add offset buffer
      let current = '';
      for (const { id, offset } of sectionElements) {
        if (scrollY >= offset) {
          current = id;
        }
      }
      activeSection = current;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateSections);
    };
  });
</script>

<main>
  <div class="container max-w-[1320px] mx-auto px-5 xl:px-3">
    <Header />

    <div class="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
      <!-- Nav -->
      <SidebarNav {activeSection} />

      <!-- Sections -->
      <div class="lg:w-3/4 space-y-6">
        <About />
        <Techs />
        <Work />
        <Publication />
        <Resume />
        <Contact />
      </div>
    </div>
  </div>
  <!-- end container -->

  <!-- Background Decorational Lines -->
  <div class="-z-[1] fixed top-0 left-0 overflow-hidden w-full h-full">
    <div
      class="absolute top-0 left-0 w-1/4 lg:w-1/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine"
    ></div>
    <div
      class="absolute top-0 left-0 w-2/4 lg:w-2/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-2"
    ></div>
    <div
      class="absolute top-0 left-0 w-3/4 lg:w-3/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-6"
    ></div>
    <div
      class="hidden lg:block absolute top-0 left-0 w-4/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-4"
    ></div>
  </div>

  <!-- Page Preloader -->
  <!-- <div
    class="preloader z-30 fixed top-0 left-0 visible opacity-100 bg-black w-full h-full text-center transition-all ease-out duration-500"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-3 font-mono font-normal uppercase text-white"
    >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader"
        >L</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-100"
        >O</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-200"
        >A</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-300"
        >D</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-400"
        >I</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-500"
        >N</span
      >
      <span
        class="opacity-100 inline-block transition ease-linear duration-100 animate-loader animation-delay-600"
        >G</span
      >
    </div>
  </div> -->
</main>

<style>
  main {
    padding-bottom: 250px;
  }
</style>
