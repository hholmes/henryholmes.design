<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.body)" />
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  async asyncData({ params, route }) {
    const pageContents = await import('~/content/page/' +
      route.params.page +
      '.json')
    return {
      page: pageContents
    }
  },
  head() {
    return {
      title: this.page.title
    }
  }
}
</script>
