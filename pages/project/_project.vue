<template>
  <div>
    <div class="flex block items-end px-4 pt-16 h-screen-1/2 md:min-h-screen bg-cover bg-center bg-scroll md:bg-fixed text-white scrim-b scrim-half"
              :style="{ backgroundImage: `url('${ project.cover }')` }">
      <div class="w-full max-w-lg mx-auto text-xl z-10 mb-4">
        <h1 class="mb-2 md:mb-4 text-4xl md:text-6xl">{{ project.title }}</h1>
        <p class="leading-snug mb-4 md:mb-8">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="py-16 max-w-lg mx-auto">
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
