<script lang="ts">
  import { derived } from 'svelte/store';
  import { user } from '../stores/store';
  import { lang } from '../stores/lang';
  import { formatData } from '../lib/formatters.ts';
  let { title, suptitle } = $props();
  const data = derived([user, lang], ([$user, $lang]) => {
    if ($user) {
      return formatData([$user], $lang)[0];
    }
    return null;
  });
</script>

<div
  id="about"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="lg:flex lg:space-x-10">
    <div class="relative h-fit mb-6">
      <img
        class="min-w-52 min-h-52 max-w-64 max-h-64 rounded-full"
        src={$data.avatar}
        alt=""
      />
    </div>

    <div>
      <h6
        class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
        data-backdrop-text={suptitle}
      >
        {title}
      </h6>
      <h2 class="text-4xl font-poppins font-semibold mb-2 dark:text-white">
        {$data.title}
      </h2>
      <p class="text-pColor dark:text-white/70">
        {$data.about}
      </p>
    </div>
  </div>
</div>
