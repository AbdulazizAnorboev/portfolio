<script lang="ts">
  import { isDark } from '../stores/theme';
  import { derived } from 'svelte/store';
  import { projects } from '../stores/store';
  import { lang } from '../stores/lang';
  import { formatData } from '../lib/formatters.ts';
  let { title, suptitle } = $props();
  const data = derived([projects, lang], ([$projects, $lang]) => {
    if ($projects) {
      return formatData([$projects], $lang)[0];
    }
    return null;
  });
</script>

<div
  id="portfolio"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="md:w-4/5 lg:w-3/4">
    <h6
      class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
      data-backdrop-text={suptitle}
    >
      {title}
    </h6>
    <h2
      class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white"
    >
      {title}
    </h2>
  </div>
  <div class="mt-6 lg:mt-12">
    <div class="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {#each $data as { image, name, description, source_code_link }}
        <div class={`work-card ${isDark ? 'work-card--dark' : ''}`}>
          <div class="work-image-wrapper">
            <img src={image} alt={name} class="work-image" />
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              class="github-icon"
              aria-label="GitHub link">GitHub</a
            >
          </div>
          <div class={`work-content ${$isDark ? 'work-content--dark' : ''}`}>
            <h3
              class="font-poppins font-semibold text-2xl mb-2 lg:text-2xl tracking-[0.5px] portfolio-stroke-text transition-all ease-linear duration-100"
            >
              {name}
            </h3>
            <p class="work-description">{description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .work-card {
    background-color: white;

    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    margin-bottom: 24px;
  }
  .work-card--dark {
    background: rgba(255, 255, 255, 0.1);
  }

  .work-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 210px;
  }

  .work-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .github-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    text-decoration: none;
    padding: 6px 10px;
    font-size: 0.85rem;
    border-radius: 9999px;
    backdrop-filter: blur(4px);
    transition: background 0.3s ease;
  }

  .github-icon:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .work-content {
    padding: 16px 20px;
    color: black;
  }

  .work-content--dark {
    color: white;
  }

  .work-description {
    /* color: rgba(255, 255, 255, 0.75); */
    font-size: 0.95rem;
    line-height: 1.6;
  }
</style>
