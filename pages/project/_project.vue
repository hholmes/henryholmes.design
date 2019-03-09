<template>
  <div class="m-4">
    <h2>{{ project.title }}</h2>
    <h4>{{ project.subtitle }}</h4>
    <div 
      v-for="section in project.sections" 
      :key="section.id"
      class="mb-10"
    >
      <div v-html="$md.render(section.body)" />
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
      title: this.project.title
    }
  }
}
</script>

<style>
h2 {
  @apply mb-2;
}
h4 {
  @apply mb-12;
}
p {
  @apply mb-8;
}
blockquote {
  @apply ml-12;
}
</style>
