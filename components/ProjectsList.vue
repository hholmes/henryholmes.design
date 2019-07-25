<template>
  <section class="flex flex-wrap container mb-8 xl:mb-16 md:-mx-6 xl:-mx-6">
    <!-- <h2>For example,</h2> -->
    <div
        v-for="project in orderBy(projects,'id')"
        class="w-full mb-4 md:w-1/2 md:px-2 xl:px-3"
        :key="project.id">
        <ProjectItem :project="project" :url="'/project' + project._path" />
    </div>
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
