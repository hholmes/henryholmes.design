<template>
  <div class="m-4">
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.body)" />
    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Email: <input type="text" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
const page = require('~/content/page/contact.json')
export default {
  data () {
    return {
      page
    }
  },
  head() {
    return {
      title: this.page.title
    }
  },
  
}
</script>

<style>
h3 {
  @apply mb-4;
}
</style>
