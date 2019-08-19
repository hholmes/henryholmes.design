<template>
  <div>
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <div class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>    
      <div class="md:flex mb-8 md:mb-6">
        <div>
          <h2>{{ prompt }}</h2>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/5">
          <label class="block text-black text-md font-semibold mb-2 md:mb-1 pr-4" 
                 for="inline-full-name">
            name
          </label>
        </div>
        <div class=" md:w-4/5">
          <input class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-full-name" 
                 name="name"
                 type="text" 
                 placeholder="You">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/5">
          <label class="block text-black text-md font-semibold mb-2 md:mb-1 pr-4" 
                 for="inline-email">
            email
          </label>
        </div>
        <div class=" md:w-4/5">
          <input class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-email" 
                 name="email"
                 type="text" 
                 placeholder="Your email address">
        </div>
      </div>
      <div class="md:flex md:items-top mb-6">
        <div class="md:w-1/5 md:pt-3">
          <label class="block text-black text-md font-semibold mb-2 md:mb-1 pr-4" 
                 for="inline-message">
            message
          </label>
        </div>
        <div class=" md:w-4/5">
          <textarea class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-message"
                 name="message"
                 placeholder="Your inquiry">
          </textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/5"></div>
        <div class=" md:w-4/5">
          <button class="shadow bg-black text-white hover:bg-black focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["prompt"]
}
</script>

