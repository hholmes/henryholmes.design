<template>
  <div class="m-4">
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
      <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        {{ section.topic }}
      </span>
    </div>
    <!-- <div v-html="$md.render(project.sections[0].body)" /> -->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  async asyncData({ params, route }) {
    const articleContents = await import('~/content/article/' +
      route.params.article +
      '.json')
    return {
      article: articleContents
    }
  },
  head() {
    return {
      title: this.article.title
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
