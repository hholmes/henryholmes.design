<template>
  <div class="md:pr-8">
    <form class="sm:max-w-sm sm:mx-auto md:m-0 lg:max-w-full" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <div class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>    
      <div class="md:flex mb-8 md:mb-6">
        <div class="hidden sm:block w-1/5"></div>
        <div class="md:w-4/5 lg:w-3/5">
          <h2>What's your thing?</h2>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/5">
          <label class="block text-black text-sm font-semibold mb-2 md:mb-1 pr-4 lg:text-right" 
                 for="inline-full-name">
            name
          </label>
        </div>
        <div class="sm:max-w-sm md:w-4/5 lg:w-3/5">
          <input class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-full-name" 
                 name="name"
                 type="text" 
                 placeholder="First Last">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/5">
          <label class="block text-black text-sm font-semibold mb-2 md:mb-1 pr-4 lg:text-right" 
                 for="inline-email">
            email
          </label>
        </div>
        <div class="sm:max-w-sm md:w-4/5 lg:w-3/5">
          <input class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-email" 
                 name="email"
                 type="text" 
                 placeholder="your@email.com">
        </div>
      </div>
      <div class="md:flex md:items-top mb-6">
        <div class="md:w-1/5 md:pt-3">
          <label class="block text-black text-sm font-semibold mb-2 md:mb-1 pr-4 lg:text-right" 
                 for="inline-message">
            message
          </label>
        </div>
        <div class="sm:max-w-sm md:w-4/5 lg:w-3/5">
          <textarea class="form-input focus:outline-none focus:bg-white focus:border-black" 
                 id="inline-message"
                 name="message"
                 placeholder="What's on your mind?">
          </textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/5"></div>
        <div class="sm:max-w-sm md:w-4/5 lg:w-3/5">
          <button class="shadow bg-black text-white hover:bg-black focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

</script>

