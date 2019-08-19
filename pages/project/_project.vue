<template>
  <!-- <div v-scroll:throttle="{fn: onScroll, throttle: 500 }" -->
  <div 
    class="overflow-hidden">
    <!-- <div class="projectCover flex block items-end px-4 md:px-0 pt-16 bg-cover bg-bottom bg-scroll md:bg-fixed text-white scrim-b">
              :style="{ backgroundImage: `url('${ project.cover }')` }"> -->
    <div class="cover mainstream flex items-center min-h-screen-1/2 lg:min-h-screen-2/3">
      <div>
        <h1 class="title"
          :style="{ backgroundImage: `url('${ project.cover }')` }">
          {{ project.title }}
        </h1>
        <p class="subtitle skip-kern">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="flex flex-wrap items-top mainstream min-h-screen-1/2 md:min-h-screen-1/4 md:mb-rhythm lg:min-h-screen-1/3">
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
    <content>
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
    </content>
  </div>
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
    if (this.project.sections.length > 0) {
      this.$nuxt.$emit('footer-bg', this.project.sections[this.project.sections.length - 1].bg)
    }
  }
}
</script>

<style scoped>
  .title {
    @apply inline-flex bg-center bg-cover;
    white-space: nowrap;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 7rem;
    line-height: 7rem;
    height: 8rem;
  }

  .subtitle { 
    @apply leading-tight text-4xl font-bold max-w-sm pb-8 -mt-4;
  }

  @screen sm {
    .title {
      @apply -ml-1;
      font-size: 10rem;
      line-height: 10rem;
      height: 11rem;
    }
    .subtitle {
      @apply -mt-6;
    }
  }

  @screen md {
    .title {
      @apply -ml-2;
      font-size: 12rem;
      line-height: 12rem;
      height: 14rem;
    }
    .subtitle {
      @apply -mt-12 max-w-md;
    }
  }

  @screen lg {
    .title {
      font-size: 18rem;
      line-height: 18rem;
      height: 20rem;
    }
    .subtitle {
      @apply text-6xl max-w-2xl;
    }
  }

  @screen xl {
    .title {
      @apply -ml-4;
      font-size: 20rem;
      line-height: 20rem;
      height: 22rem;
    }
    .subtitle {
      @apply text-6xl;
    }
  }
</style>