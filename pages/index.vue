<template>
  <section class="container p-2">
    <div v-html="$md.render(page.body)" />
  </section>
</template>

<script>
export default {
  async asyncData({ params, route }) {
    const pageData = await import('~/content/meta/intro.json')
    return {
      page: pageData
    }
  }
}
</script>

<style>
h1 {
  @apply mb-2;
}
</style>
