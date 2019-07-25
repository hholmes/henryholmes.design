<template>
  <section class="container">
    <!-- <h2>For example,</h2> -->
    <ul class="block md:flex list-reset">
      <li
        v-for="project in orderBy(projects,'id')"
        class="flex-1"
        :key="project.id">
        <ProjectItem :project="project" :url="'/project' + project._path" />
      </li>
    </ul>
    <p class="text-right hidden">
      <a href="/work">see more projects ›</a>
    </p>
  </section>
</template>

<script>
import ProjectItem from "~/components/ProjectItem"
import Vue2Filters from 'vue2-filters'

const context = require.context('~/content/project/', false, /\.json$/)
const projects = context.keys().map(key => ({
    ...context(key),
    _path: `/${key.replace('.json', '').replace('./', '')}`
  }));

export default {
  data () {
    return {
      projects
    }
  },
  components: {
    ProjectItem
  },
  mixins: [Vue2Filters.mixin]
}
</script>
