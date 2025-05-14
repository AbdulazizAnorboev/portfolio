<script lang="ts">
  import { lang } from '../stores/lang';
  import Socials from './Socials.svelte';
  const { activeSection, items } = $props();
</script>

<div
  class="bg-white dark:bg-boxDark z-10 sticky top-2 lg:top-6 lg:h-fit lg:w-1/4 backdrop-blur-[5px] rounded-lg px-4 py-3 lg:px-8 lg:py-5 xl:px-10 xl:py-7 lg:backdrop-blur-none"
>
  <ul
    class="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0"
  >
    {#each items as { id, label, short }}
      <li class="list-none inline-block lg:block">
        <a
          class="section-link dark:secion-link-dark group inline-flex justify-center items-center lg:block lg:justify-normal relative w-9 h-9 border border-transparent border-dashed rounded-full lg:w-auto lg:h-auto lg:border-none lg:rounded-none py-3 transition ease-linear duration-100 text-pColor {activeSection ===
          id
            ? 'text-xl dark:text-white active'
            : ''}"
          href={`#${id}`}
        >
          <span class="hidden lg:inline-block">{label}</span>
          <span class="lg:hidden">{short}</span>
          <span class="nav-circle"></span>
        </a>
      </li>
    {/each}
  </ul>
</div>
