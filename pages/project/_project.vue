<template>
  <div class="m-4">
    <h1>{{ project.title }}</h1>
    <h4>{{ project.subtitle }}</h4>
    <div 
      v-for="section in project.sections"
      v-bind:key="section.id">
      <div v-html="$md.render(section.body)" class="mb-10" />
    </div>
    <!-- <div v-html="$md.render(project.sections[0].body)" /> -->
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
h2 {
  @apply mb-4;
}
h4 {
  @apply mb-12;
}
</style>
