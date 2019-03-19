<template>
  <section class="container p-2">
    <div v-html="$md.render(intro.body)" />
    <ProjectsList />
  </section>
</template>

<script>
import ProjectsList from "~/components/ProjectsList"

const intro = require('~/content/meta/intro.json')

export default {
  data () {
    return {
      intro
    }
  },
  components: {
    ProjectsList
  }
}
</script>

<style>
h1 {
  @apply mb-2;
}
</style>
