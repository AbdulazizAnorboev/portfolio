<script lang="ts">
  import { derived } from 'svelte/store';
  import { lang } from '../stores/lang';
  import { activities } from '../stores/store';
  import { formatData } from '../lib/formatters.ts';
  let { title, suptitle, exhibition, conference } = $props();

  const activityData = derived([activities, lang], ([$activities, $lang]) => {
    if ($activities) {
      return formatData([$activities], $lang)[0];
    }
    return [];
  });

  const label = (kind: string) => (kind === 'conference' ? conference : exhibition);
  const icon = (kind: string) =>
    kind === 'conference' ? 'bi bi-easel' : 'bi bi-shop-window';
</script>

<div
  id="activity"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="md:w-4/5 lg:w-3/4">
    <h6
      class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
      data-backdrop-text={suptitle}
    >
      {suptitle}
    </h6>
    <h2
      class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white"
    >
      {title}
    </h2>
  </div>

  <div
    class="relative pl-5 space-y-8 mt-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed"
  >
    {#each $activityData as { kind, title, role, organizer, location, date, points, link, logo }}
      <div class="group">
        <div
          class="relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full"
        >
          {date}
        </div>

        <div class="flex items-center flex-wrap gap-x-3 gap-y-1 mt-3 mb-1">
          <span class="activity-kind dark:text-white/80">
            <i class={icon(kind)}></i>
            {label(kind)}
          </span>
          {#if location}
            <span class="text-pColor dark:text-white/60 text-sm">{location}</span>
          {/if}
        </div>

        <h4
          class="font-poppins font-medium text-lg lg:text-xl mb-1 lg:mb-2 dark:text-white"
        >
          {#if link}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline">{title}</a
            >
          {:else}
            {title}
          {/if}
        </h4>

        <div class="flex items-center flex-wrap gap-x-2">
          {#if logo}
            <img class="activity-logo rounded-full inline-block" src={logo} alt={organizer} />
          {/if}
          {#if organizer}
            <span class="text-pColor dark:text-white/70">{organizer}</span>
          {/if}
          {#if role}
            <span class="text-pColor dark:text-white/70">· {role}</span>
          {/if}
        </div>

        {#if points && points.length}
          <ul class="activity-points text-pColor dark:text-white/70">
            {#each points as point}
              <li>{point}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .activity-kind {
    font-family: monospace;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .activity-logo {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
  .activity-points {
    margin-top: 0.6rem;
    padding-left: 1.1rem;
    list-style: disc;
  }
  .activity-points li {
    margin-bottom: 0.35rem;
    line-height: 1.7;
  }
</style>
