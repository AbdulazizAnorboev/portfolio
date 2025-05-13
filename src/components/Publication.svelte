<script lang="ts">
  import { lang } from '../stores/lang';
  import { getPublicationsData } from '../data/publication';
  $: publication = getPublicationsData($lang);
</script>

<div
  id="publication"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="md:w-4/5 lg:w-3/4">
    <h6
      class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
      data-backdrop-text={publication.section}
    >
      {publication.section}
    </h6>
    <h2
      class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white"
    >
      {publication.section}
    </h2>
  </div>
  <div class=" divide-y divide-dashed divide-black/20">
    <!-- Services box 1 -->
    {#each publication.data as { title, authors, venue, link }}
      <div class="publication-card">
        <h4
          class="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white"
        >
          {title}
        </h4>
        <p class="text-pColor dark:text-white/70">{authors}</p>
        <p class="publication-venue text-pColor dark:text-white/60">
          {venue}
        </p>
        <a class="publication-link" href={link} target="_blank"
          >{publication.view_paper}</a
        >
      </div>
    {/each}
  </div>
</div>

<style>
  .publication-card {
    padding: 1.5rem 0;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
  }

  .publication-title {
    font-weight: 600;
    font-size: 1.125rem;
    color: #111;
    margin-bottom: 0.25rem;
  }

  .publication-authors {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 0.25rem;
  }

  .publication-venue {
    font-size: 0.875rem;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  .publication-link {
    font-size: 0.875rem;
    color: #0070f3;
    text-decoration: underline;
  }
</style>
