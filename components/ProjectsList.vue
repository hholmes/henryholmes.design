<template>
  <ul class="block md:flex list-reset">
    <li
      v-for="project in projects"
      class="flex-1 m-4"
      :key="project.id">
      <ProjectItem :project="project" :url="'/project' + project._path" />
    </li>
  </ul>
</template>

<script>
import ProjectItem from "~/components/ProjectItem"

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
  }
}
</script>
