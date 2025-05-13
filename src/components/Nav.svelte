<script lang="ts">
  export let activeSection: string;
  import { lang } from '../stores/lang';
  import { getContactData } from '../data/contact';
  import { getNavData } from '../data/nav';

  $: contact = getContactData($lang);
  $: items = getNavData($lang);
</script>

<div
  class="bg-boxDark z-10 sticky top-2 lg:top-6 lg:h-fit lg:w-1/4 dark:bg-boxDark backdrop-blur-[5px] rounded-lg px-4 py-3 lg:bg-black lg:px-8 lg:py-5 xl:px-10 xl:py-7 lg:backdrop-blur-none"
>
  <ul
    class="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0"
  >
    {#each items as { id, label, short }}
      <li class="list-none inline-block lg:block">
        <a
          class="section-link group inline-flex justify-center items-center lg:block lg:justify-normal relative w-9 h-9 border border-transparent border-dashed rounded-full lg:w-auto lg:h-auto lg:border-none lg:rounded-none py-3 transition ease-linear duration-100 hover:text-white {activeSection ===
          id
            ? 'text-white active'
            : 'text-white/70'}"
          href={`#${id}`}
        >
          <span class="hidden lg:inline-block">{label}</span>
          <span class="lg:hidden">{short}</span>
          <span
            class="nav-circle hidden lg:inline-block absolute top-1/2 right-0 -translate-y-1/2 w-[5px] h-[5px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:w-[5px] before:h-[5px] before:rounded-full before:opacity-70 before:transition-all before:ease-out before:duration-200 group-hover:before:opacity-100"
          ></span>
        </a>
      </li>
    {/each}
  </ul>
  <ul class="socials mt-4">
    {#each contact.data.socials as { logo, link, alt }}
      <li class="list-none inline-block">
        <a class="icon" href={link} target="_blank" rel="noopener noreferrer">
          <img src={logo} {alt} class="icon-image" />
        </a>
      </li>
    {/each}

    <a
      class="phone inline-flex justify-center items-center rounded-full text-white"
      href={`tel:${contact.data.phone}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bi bi-telephone"></i>
      +82 10-9550-0715
    </a>

    <a
      class="email"
      href={`mailto:${contact.data.email}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="bi bi-envelope"></i>
      abdulaziz.anorboyev@gmail.com
    </a>
    <a class="email" href={contact.data.cv} download>
      <i class="bi bi-cloud-download"></i>
      Download CV
    </a>
  </ul>
</div>

<style>
  .section-link.active {
    font-weight: bold;
  }
  .icon {
    display: block;
    /* background: rgba(255, 255, 255, 0.4); */
    width: 40px;
    height: 40px;
    border-radius: 10%;
    overflow: hidden;
  }
  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  @media (min-width: 750px) {
    .socials {
      justify-content: flex-start;
    }
  }

  .phone,
  .email {
    font-size: 14px;
    gap: 10px;
    border: 1px solid white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2px 10px;
    border-radius: 5px;
  }
  .phone {
    font-size: 16px;
  }
</style>
