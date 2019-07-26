<template>
  <section class="flex flex-wrap m-0 md:-mx-6 lg:-mx-10 xl:-mx-18 mb-16">
    <!-- <h2>For example,</h2> -->
    <div
        v-for="project in orderBy(projects,'id')"
        class="w-full md:w-1/2 py-2 px-0 md:p-2"
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
