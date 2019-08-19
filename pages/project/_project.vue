<template>
  <!-- <div v-scroll:throttle="{fn: onScroll, throttle: 500 }" -->
  <article class="overflow-hidden">
    <!-- <div class="projectCover flex block items-end px-4 md:px-0 pt-16 bg-cover bg-bottom bg-scroll md:bg-fixed text-white scrim-b">
              :style="{ backgroundImage: `url('${ project.cover }')` }"> -->
    <div class="cover mainstream flex items-center min-h-screen-1/2 md:min-h-screen-5/8">
      <div>
        <h1 class="title"
          :style="{ backgroundImage: `url('${ project.cover }')` }">
          {{ project.title }}
        </h1>
        <p class="subtitle skip-kern">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="flex flex-wrap items-top mainstream min-h-screen-1/2 md:min-h-screen-1/4 md:mb-rhythm">
      <SimpleList
        class="w-1/2 md:w-1/4"
        :header="'Timeframe'" 
        :items="[timeframeText]"
        />
      <SimpleList
        class="w-1/2 md:flex-auto md:w-auto"
        :header="'Roles'" 
        :items='project.roles'
        />
      <SimpleList
        class="w-1/2 md:flex-auto md:w-auto"
        :header="'Tasks'" 
        :items="project.tasks"
        />
      <SimpleList
        class="w-1/2 md:flex-auto md:w-auto"
        :header="'Tools'" 
        :items="project.tools"
        />
    </section>
    <section 
      v-for="(section, index) in project.sections" 
      :key="index">
      <img class="w-full my-0" :src="section.sectionBanner" />
      <div :style="{ backgroundColor: section.bg, color: section.fg }">
        <div class="mainstream flex flex-wrap clearfix py-rhythm">
          <h2 class="w-full lg:pr-8 lg:-mt-2 lg:leading-tight lg:w-1/4">{{ section.heading }}</h2>
          <div 
            class="w-full lg:w-2/4 xl:max-w-full"
            v-html="$md.render(section.body)" />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import SimpleList from "~/components/SimpleList"

export default {
  name: 'Project',
  layout: 'project',
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
      return this.project.start + (this.project.ongoing ? ' →' : '<br />↓<br />' + this.project.end); 
    }
  },
  components: {
    SimpleList
  },
  // data () {
  //   return {
  //     position: { scrollTop: 0, scrollLeft: 0 }
  //   };
  // },
  mounted () {
    if (this.project.sections && this.project.sections.length > 0) {
      this.$nuxt.$emit('footer-bg', this.project.sections[this.project.sections.length - 1].bg)
    }
  }
}
</script>

<style scoped>
  .title {
    @apply bg-center bg-cover;
    /* white-space: nowrap; */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: calc(86px + (180 - 86) * ((100vw - 480px) / (1600 - 480)));
    line-height: 1em;
  }

  .subtitle { 
    @apply leading-tight font-bold w-2/3 pb-8;
    font-size: calc(24px + (56 - 24) * ((100vw - 300px) / (1600 - 300)));
  }
</style>