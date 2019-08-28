<template>
  <section>
    <div
      v-for="project in orderBy(projectsToShow,'id')"
      class="w-full md:w-1/2 py-2 px-0 sm:p-2"
      :key="project.id">
      <ProjectCard :project="project" :url="'/project' + project._path" />
    </div>
    <p class="text-right hidden">
      <a href="/work">see more projects ›</a>
    </p>
  </section>
</template>

<script>
import ProjectCard from "~/components/ProjectCard"
import Vue2Filters from 'vue2-filters'

const context = require.context('~/content/project/', false, /\.json$/)
const projects = context.keys().map(key => ({
    ...context(key),
    _path: `/${key.replace('.json', '').replace('./', '')}`
  }));

export default {
  props: ['visibleProjects'],
  data () {
    return {
      projects
    }
  },
  computed: {
    projectsToShow: function() {
      var projectsSelected = []
      projects.forEach(p => {
        if (this.visibleProjects.includes(p.title)) {
          projectsSelected.push(p)
        }
      });
      return projectsSelected;
    }
  },
  components: {
    ProjectCard
  },
  mixins: [Vue2Filters.mixin]
}
</script>
