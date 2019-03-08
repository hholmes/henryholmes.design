<template>
  <div class="m-4">
    <div v-html="$md.render(project.body)" />
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  async asyncData({ params, route }) {
    const projectData = await import('~/content/project/' +
      route.params.project +
      '.json')
    return {
      project: projectData
    }
  },
  head() {
    return {
      title: this.project.title + ' | Henry Holmes'
    }
  }
}
</script>

<style>
h3 {
  @apply mb-4;
}
</style>
