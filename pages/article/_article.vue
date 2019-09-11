<template>
  <div>
    <h2>{{ article.title }}</h2>
    <img 
      class="w-1/2" 
      :src="article.cover" />
    <div 
      v-for="section in article.sections" 
      :key="section.id"
      class="mb-10"
    >
      <div v-html="$md.render(section.body)" />
      <span class="inline-block bg-gray-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
        {{ section.topic }}
      </span>
    </div>
    <!-- <div v-html="$md.render(project.sections[0].body)" /> -->
  </div>
</template>

<script>
  const cloneDeep = require('clone-deep');

  export default {
    async asyncData({ params, route }) {
      const articleContents = await import('~/content/article/' +
        route.params.article +
        '.json')
      return {
        article: cloneDeep(articleContents)
      }
    },
    head() {
      return {
        title: this.article.title
      }
    }
  }
</script>
