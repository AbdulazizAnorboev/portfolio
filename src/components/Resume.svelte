<script lang="ts">
  import { lang } from '../stores/lang';
  import { getResumeData } from '../data/resume';
  $: data = getResumeData($lang);
</script>

<div
  id="resume"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="md:w-4/5 lg:w-3/4">
    <h6
      class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
      data-backdrop-text={data.section}
    >
      {data.section}
    </h6>
    <h2
      class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white"
    >
      {data.title}
    </h2>
    <!-- <p class="text-pColor dark:text-white/70">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore
    </p> -->
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-6">
    <div
      class="relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed"
    >
      <div class="text-3xl dark:text-white">
        <i class="bi bi-mortarboard"></i>
      </div>
      <!-- Education box 1 -->
      {#each data.education as { date, title, institution, logo, link }}
        <div class="group">
          <div
            class="relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full"
          >
            {date}
          </div>
          <h4
            class="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white"
          >
            {title}
          </h4>
          <div class="institution-image-wrapper">
            <img
              class="rounded-full inline-block mr-2"
              src={logo}
              alt={institution}
            />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link}
              class="text-pColor dark:text-white/70">{institution}</a
            >
          </div>
        </div>
      {/each}
    </div>
    <div
      class="relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed"
    >
      <div class="text-3xl dark:text-white">
        <i class="bi bi-briefcase"></i>
      </div>
      {#each data.experience as { date, title, company, points, link, logo }}
        <div class="group mb-6">
          <div
            class="relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full"
          >
            {date}
          </div>
          <h4
            class="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white"
          >
            {title}
          </h4>
          <div class="institution-image-wrapper">
            <img
              class="rounded-full inline-block mr-2"
              src={logo}
              alt={company}
            />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link}
              class="text-pColor dark:text-white/70">{company}</a
            >
          </div>
          <ul class="list-disc pl-5 mt-3 text-pColor dark:text-white/70">
            {#each points as point}
              <div class="point relative pl-5 text-gray-800 dark:text-white/80">
                <span class="absolute left-0 top-1 text-xs">▹</span>
                <span class="block">{point}</span>
              </div>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .institution-image-wrapper {
    display: flex;
    align-items: center;
    margin-top: 0.5rem; /* mt-2 */
    margin-bottom: 0.25rem; /* mb-1 */
  }
  .institution-image-wrapper img {
    width: 35px; /* w-10 */
    height: 35px; /* h-10 */
    border-radius: 50%; /* rounded-full */
    margin-right: 0.5rem; /* mr-2 */
    border: 1px solid #00000033; /* border border-black/20 */
    padding: 2px;
  }
  .institution-image-wrapper a {
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
  }
  .point {
    margin-top: 5px;
    font-size: 13px;
  }
</style>
