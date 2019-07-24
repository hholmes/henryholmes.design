<template>
    <form class="w-full max-w-sm" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <div class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                 for="inline-full-name">
            Your Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="form-input" 
                 id="inline-full-name" 
                 type="text" 
                 placeholder="First Last">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                 for="inline-email">
            Your Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="form-input" 
                 id="inline-email" 
                 type="text" 
                 placeholder="your@email.com">
        </div>
      </div>
      <div class="md:flex md:items-top mb-6">
        <div class="md:w-1/3 md:pt-3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                 for="inline-email">
            Message
          </label>
        </div>
        <div class="md:w-2/3">
          <textarea class="form-input" 
                 id="inline-message"
                 placeholder="What's on your mind?">
          </textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
</template>

<script>

</script>

