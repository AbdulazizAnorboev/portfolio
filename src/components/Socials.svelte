<script lang="ts">
  import { lang } from '../stores/lang';
  import { getContactData } from '../data/contact';

  $: contact = getContactData($lang);
</script>

<div class="socials">
  {#each contact.data.socials as { logo, link, alt }}
    <a class="icon" href={link} target="_blank" rel="noopener noreferrer">
      <img src={logo} {alt} class="icon-image" />
    </a>
  {/each}
  <a
    class="custom-button"
    href={`mailto:${contact.data.email}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      class="custom-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 16"
    >
      <path
        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
      />
      <path
        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
      />
    </svg>
    {contact.data.email}
  </a>
  <a
    class="custom-button phone"
    href={`tel:${contact.data.phone}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      class="custom-icon"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>

    {contact.data.phone}
  </a>
  <a class="custom-button download" href={contact.data.cv} download>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="custom-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>

    Download CV
  </a>
</div>

<style>
  .icon {
    display: block;
    /* background: rgba(255, 255, 255, 0.4); */
    width: 40px;
    height: 40px;
    border-radius: 10%;
    overflow: hidden;
  }
  .icon:hover {
    opacity: 95%;
  }
  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* justify-content: center; */
    padding: 10px 0px;
    border-radius: 10px;
  }

  /* Custom styles */
  .custom-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    display: inline-flex;
    align-items: center;
    color: white;
    background-color: #1d4ed8;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .custom-button:hover {
    opacity: 95%;
  }

  .phone {
    background-color: #12ab00 !important;
  }
  .download {
    background-color: #50a2ff !important;
  }

  .custom-button:hover {
    background-color: #1e40af; /* blue-800 */
  }

  .custom-button:focus {
    outline: none;
    box-shadow: none;
  }

  .custom-button:focus-visible {
    outline: none;
    outline-offset: none;
  }

  .custom-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    fill: currentColor;
    color: white;
  }
</style>
