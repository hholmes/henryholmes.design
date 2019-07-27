<template>
  <div>
    <section class="flex items-end px-2 pt-16 min-h-screenhalf md:min-h-screen bg-cover bg-center bg-fixed text-white scrim-b"
             :style="{ backgroundImage: `url('${ project.cover }')` }">
      <div class="w-full max-w-lg mx-auto text-xl z-10 mb-4">
        <h1 class="mb-4 text-4xl md:text-6xl">{{ project.title }}</h1>
        <p class="leading-snug">{{ project.subtitle }}</p>
      </div>
    </section>
    <section class="p-2 py-16 max-w-lg mx-auto">
      <div 
        v-for="section in project.sections" 
        :key="section.id"
        class="mb-16">
        <div v-html="$md.render(section.body)" />
        <!-- <span class="inline-block bg-gray-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          {{ section.topic }}
        </span> -->
      </div>
    </section>
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
