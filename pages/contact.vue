<template>
  <div class="m-4">
    <h1>{{ page.title }}</h1>
    <div class="mb-8" v-html="$md.render(page.body)" />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "~/components/ContactForm"
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
  components: {
    ContactForm,
  }
  
}
</script>

<style>
h3 {
  @apply mb-4;
}
</style>
