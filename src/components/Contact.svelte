<script lang="ts">
  import { lang } from '../stores/lang';
  import { getContactData } from '../data/contact';

  $: contact = getContactData($lang);

  let form = { name: '', email: '', message: '' };
  let loading = false;
  let showSuccess = false;
  let showError = false;

  const sendTelegramMessage = async () => {
    const botToken = '7753198663:AAHURNgneJ5sLRHU_npqCLUpuH73cIwvdCM';
    const chatId = 2452294;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `
🚀 New Portfolio Inquiry!

👤 Name: ${form.name}
📧 Email: ${form.email}
💬 Message: ${form.message}

📅 Received on: ${new Date().toLocaleString()}
    `;

    try {
      loading = true;
      const res = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });

      if (res.ok) {
        showSuccess = true;
        showError = false;
        form = { name: '', email: '', message: '' };
      } else {
        throw new Error('Telegram API failed');
      }
    } catch (err: any) {
      console.error('Telegram Error:', err.message);
      showError = true;
      showSuccess = false;
    } finally {
      loading = false;
    }
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    await sendTelegramMessage();
  };
</script>

<div
  id="contact"
  class="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]"
>
  <div class="md:w-4/5 lg:w-3/4">
    <h6
      class="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15"
      data-backdrop-text={contact.section}
    >
      {contact.section}
    </h6>
    <h2
      class="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white"
    >
      {contact.title}
    </h2>
  </div>

  <!-- Contact Form -->
  <form class="space-y-8 mt-8 lg:mt-12" on:submit={handleSubmit}>
    <div class="flex w-full space-x-4">
      <div class="w-1/2">
        <input
          class="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
          type="text"
          name="name"
          placeholder={contact.name}
          required
          bind:value={form.name}
        />
      </div>
      <div class="w-1/2">
        <input
          class="bg-transparent w-full border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
          type="email"
          name="email"
          placeholder={contact.email}
          required
          bind:value={form.email}
        />
      </div>
    </div>

    <textarea
      class="bg-transparent w-full h-[200px] border-b border-black/20 border-dashed pb-4 py-0 text-sm text-black placeholder:text-black/40 transition ease-out duration-[120] focus:outline-none focus:border-black dark:text-white dark:placeholder:text-white/50 dark:border-white/20 dark:focus:border-white"
      name="message"
      placeholder={contact.message}
      bind:value={form.message}
    ></textarea>

    <button
      class="inline-block bg-black text-white px-8 py-4 rounded-full font-mono text-sm transition linear duration-100 dark:bg-white/15 dark:hover:bg-white/20"
      type="submit"
      disabled={loading}
    >
      {loading ? 'Sending...' : contact.send}
    </button>
  </form>

  <!-- Submit result -->
  <div class="submit-result mt-4">
    {#if showSuccess}
      <span class="block transition-all duration-200 ease-out text-green-700">
        ✅ Thank you! Your Message has been sent.
      </span>
    {/if}
    {#if showError}
      <span class="block transition-all duration-200 ease-out text-red-600">
        ❌ Something went wrong, Please try again!
      </span>
    {/if}
  </div>
</div>
