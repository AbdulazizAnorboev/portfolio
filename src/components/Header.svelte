<script lang="ts">
  import { lang, changeLanguage } from '../stores/lang';
  import { isDark, toggleTheme } from '../stores/theme';
</script>

<div class="lg:flex lg:justify-between">
  <div class="flex h-[50px] items-center space-x-6 lg:order-2 justify-end">
    <ul
      class="space-x-3.5 font-mono font-medium uppercase text-sm tracking-[0.5px]"
    >
      <li class="list-none inline-block">
        <button
          class:lang={$lang === 'en'}
          class={`hover:underline dark:text-white`}
          onclick={() => changeLanguage('en')}>EN</button
        >
      </li>
      <li class="list-none inline-block">
        <button
          class:lang={$lang === 'kr'}
          class={`hover:underline dark:text-white`}
          onclick={() => changeLanguage('kr')}>KR</button
        >
      </li>
    </ul>
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10"
      onclick={toggleTheme}
    >
      {#if $isDark}
        <svg
          class="theme__icon theme__icon--dark text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path></svg
        >
      {:else}
        <svg
          class="theme__icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path></svg
        >
      {/if}
    </button>

    <!-- <button
      on:click={onOpen}
      class="menu-btn group relative w-[50px] h-[50px] bg-black dark:bg-boxDark rounded-b-lg"
    >
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1 h-1 rounded-full transition-all ease-linear duration-100 delay-100 group-hover:scale-[3]"
      ></span>
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 before:content-[''] before:absolute before:top-0 before:-left-[10px] before:bg-white before:w-1 before:h-1 before:rounded-full before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-0 after:-right-[10px] after:bg-white after:w-1 after:h-1 after:rounded-full after:transition-all after:ease-linear after:duration-100 group-hover:before:left-0 group-hover:before:opacity-0 group-hover:after:right-0 group-hover:after:opacity-0"
      ></span>
    </button> -->
  </div>
  <div class="py-7 lg:order-1">
    <h1 class="text-5xl xl:text-5xl font-poppins font-semibold dark:text-white">
      Abdulaziz Anorboev <span class="stroke-text">(아지즈)</span>
    </h1>
  </div>
</div>

<style>
  .theme__icon {
    width: 1.5rem !important;
    height: 1.5rem !important;
    color: #000;
  }
  .theme__icon--dark {
    color: #fff;
  }
  .theme__icon--dark path {
    fill: #fff;
  }

  .lang {
    text-decoration: underline;
  }
</style>
