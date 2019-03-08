<template>
  <section class="container p-2">
    <div v-html="$md.render(page.body)" />
    <nuxt-link to="/project/smileback">SmileBack</nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData({ params, route }) {
    const pageData = await import('~/content/meta/intro.json')
    return {
      page: pageData
    }
  },
  head() {
    return {
      title: 'Henry Holmes'
    }
  }
}
</script>

<style>
h1 {
  @apply mb-8;
}
</style>
