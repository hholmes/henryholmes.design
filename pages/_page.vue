<template>
  <div class="m-4">
    <div v-html="$md.render(post.body)" />
  </div>
</template>

<script>
export default {
  async asyncData({ params, route }) {
    const pageData = await import('~/content/page/' +
      route.params.page +
      '.json')
    return {
      post: pageData
    }
  },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

<style>
h3 {
  @apply mb-4;
}
</style>
