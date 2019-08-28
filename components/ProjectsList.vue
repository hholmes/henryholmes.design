<template>
  <section>
    <transition-group
      appear
      appear-class="appear-enter"
      appear-active-class="appear-enter-active"
      appear-to-class="appear-enter-to"
      @before-appear="beforeAppear"
      @appear="appearing"
      @after-appear="afterAppear">
      <ProjectCard 
        v-for="project in orderBy(projectsToShow,'id')"
        :key="project.id"
        class="w-full md:w-1/2 py-2 px-0 sm:p-2"
        style="transition: all 200ms ease-out"
        :project="project" 
        :url="'/project' + project._path" />
    </transition-group>
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
    components: {
      ProjectCard
    },
    mixins: [Vue2Filters.mixin],
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
    methods: {
      beforeAppear(el) {
        el.style.opacity = 0
      },
      appearing(el, done) {
        Velocity(
          el,
          { opacity: 1 },
          { easing: 'easeOutExpo'},
          { complete: done }
        )
      },
      afterAppear(el) {

      }
    }
  }
</script>

<style scoped>
  .appear-enter {
    opacity: 0;
    /* transform: translateY(10%); */
  }
  .appear-enter-to {
    opacity: 1;
    /* transform: translateY(0%); */
  }
  .appear-enter-active {
    transition: opacity;
  }
</style>