<template>
  <div>
    <div class="projectCover flex block items-end px-4 md:px-0 pt-16 bg-cover bg-bottom bg-scroll md:bg-fixed text-white scrim-b"
              :style="{ backgroundImage: `url('${ project.cover }')` }">
      <div class="w-full max-w-3xl xl:max-w-4xl mx-auto text-xl z-10 mb-4">
        <h1 class="mb-2 md:mb-4 text-3xl md:text-6xl">{{ project.title }}</h1>
        <p class="leading-snug mb-4 md:mb-8">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="flex flex-wrap max-w-3xl xl:max-w-4xl mx-auto">
      <PlainList
        class="projectContext my-8 md:my-0"
        :header="'Timeframe'" 
        :items="[timeframeText]"
        />
      <PlainList
        class="projectContext my-8 md:my-0"
        :header="'Roles'" 
        :items='project.roles'
        />
      <PlainList
        class="projectContext my-8 md:my-0"
        :header="'Tasks'" 
        :items="project.tasks"
        />
      <PlainList
        class="projectContext my-8 md:my-0"
        :header="'Tools'" 
        :items="project.tools"
        />
    </section>
    <section class="py-16 max-w-3xl xl:max-w-4xl mx-auto">
      <div 
        v-for="section in project.sections" 
        :key="section.id"
        class="flex flex-wrap mb-16">
        <h2 class="w-full md:w-1/4">{{ section.heading }}</h2>
        <div 
          class="w-full md:w-1/2"
          v-html="$md.render(section.body)" />
        <!-- <span class="inline-block bg-gray-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          {{ section.topic }}
        </span> -->
      </div>
    </section>
  </div>
</template>

<script>
import PlainList from "~/components/PlainList"

// import axios from 'axios'
export default {
  async asyncData({ params, route }) {
    const projectData = await import('~/content/project/' +
      route.params.project +
      '.json')
    return {
      project: projectData
    }
  },
  head() {
    return {
      title: this.project.title
    }
  },
  computed: {
    timeframeText() {
      return this.project.start + ' → ' + this.project.end; 
    }
  },
  components: {
    PlainList
  }
}
</script>

<style>
.projectCover, .projectCover::after {
  @apply h-screen-1/2
}
.projectContext {
  @apply w-1/2
}

@screen md {
  .projectCover, .projectCover::after {
    @apply h-screen-2/3
  }
  .projectContext {
    @apply w-1/4;
  }
}
</style>