<template>
  <div class="m-4">
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.body)" />
  </div>
</template>

<script>
const page = require('~/content/page/work.json')
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
  }
  
}
</script>

<style>
h3 {
  @apply mb-4;
}
</style>
