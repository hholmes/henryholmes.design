<template>
  <section class="container p-2">
    <div v-html="$md.render(page.body)" />
    <ul class="mt-12">
      <li
      v-for="project in projects"
      :key=project.id>
        {{ project.title }}
      </li>
    </ul>
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
  data () {
    return {
      projects: [
      {
        title: "First project"
      },
      {
        title: "Second project"
      }
    ]
    }
  }
}
</script>

<style>
h1 {
  @apply mb-2;
}
</style>
