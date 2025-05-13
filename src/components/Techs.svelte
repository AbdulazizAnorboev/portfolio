<script lang="ts">
  import { lang } from '../stores/lang';
  import { getTechsData } from '../data/techs';
  $: technologies = getTechsData($lang);
</script>

<div
  id="techs"
  class="bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <h6
    class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
    data-backdrop-text={technologies.section}
  >
    {technologies.section}
  </h6>
  <div class="technologies">
    <div class="tech">
      {#each technologies.data as { icon, name }}
        <div class="tech-item">
          <div class="tech-icon">
            <img src={icon} alt={name} />
          </div>
          <div class="tech-tooltip">{name}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .technologies {
    margin-top: 3rem; /* mt-12 */
  }

  .tech {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px; /* gap-12 */
    margin-top: 2.5rem; /* mt-10 */
  }

  .tech-item {
    position: relative;
  }

  .tech-icon {
    position: relative;
    transform-origin: top right;
    transition: transform 0.3s;
  }

  .tech-item:hover .tech-icon {
    transform: rotate(6deg) scale(0.9);
  }

  .tech-icon {
    background: rgba(255, 255, 255, 0.4);
    padding: 10px;
    border-radius: 0.375rem; /* rounded */
    width: 80px;
    height: 80px;
  }
  .tech-icon img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .tech-tooltip {
    position: absolute;
    bottom: 0;
    background-color: #f3f4f6; /* roughly Tailwind's gray-100 */
    color: #111827; /* Tailwind's black-100 approximation */
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.375rem;
    transform: translateY(100%);
    opacity: 0;
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  .tech-item:hover .tech-tooltip {
    transform: translateY(0) rotate(6deg);
    opacity: 1;
  }
</style>
