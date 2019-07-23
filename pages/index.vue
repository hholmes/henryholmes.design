<template>
  <section class="container p-2 font-inter">
    <div v-html="$md.render(intro.body)" />
    <ProjectsList />
    <!-- <LensList /> -->
    <!-- <ArticlesList /> -->
  </section>
</template>

<script>
import ProjectsList from "~/components/ProjectsList"
// import LensList from "~/components/LensList"
// import ArticlesList from "~/components/ArticlesList"

const intro = require('~/content/meta/intro.json')

export default {
  data () {
    return {
      intro
    }
  },
  components: {
    ProjectsList,
    // LensList,
    // ArticlesList
  }
}
</script>

<style>
h1 {
  @apply mb-2;
}
</style>
