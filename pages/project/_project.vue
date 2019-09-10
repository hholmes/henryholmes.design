<template>
  <!-- <div v-scroll:throttle="{fn: onScroll, throttle: 500 }" -->
  <article class="overflow-hidden">
    <!-- <div class="projectCover flex block items-end px-4 md:px-0 pt-16 bg-cover bg-bottom bg-scroll md:bg-fixed text-white scrim-b">
              :style="{ backgroundImage: `url('${ project.cover }')` }"> -->
    <div class="cover mainstream flex items-center min-h-screen-1/2 md:min-h-screen-5/8">
      <div>
        <h1 class="title"
          :style="{ backgroundImage: `url('${ project.cover.split('upload/')[0] + 'upload/w_1024,e_art:linen,' + project.cover.split('upload/')[1] }')` }"
          v-html="project.title">
        </h1>
        <p class="subtitle skip-kern">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="flex flex-wrap items-top mainstream min-h-screen-1/2 md:min-h-screen-1/4 md:mb-rhythm">
      <SmartList
        class="w-1/2 md:w-1/4 mb-rhythm md:mb-0 pr-8 md:mr-0"
        :header="'Timeframe'" 
        :items="[timeframeText]"
        />
      <SmartList
        class="w-1/2 md:flex-auto md:w-auto mb-rhythm md:mb-0"
        :header="'Roles'" 
        :items='project.roles'
        />
      <SmartList
        class="w-1/2 md:flex-auto md:w-auto pr-8 md:pr-0"
        :header="'Tasks'" 
        :items="project.tasks"
        />
      <SmartList
        class="w-1/2 md:flex-auto md:w-auto"
        :header="'Tools'" 
        :items="project.tools"
        />
    </section>
    <ArticleSection 
      v-for="(section, index) in project.sections" 
      :key="index"
      :banner="{ src: section.sectionBanner }"
      :colors="{ bg: section.bg, fg: section.fg }"
      :title="section.heading"
      :body="section.body"
    />
  </article>
</template>

<script>
  import SmartList from "~/components/SmartList"
  import ArticleSection from "~/components/ArticleSection"
  import { Luminous, LuminousGallery } from 'luminous-lightbox'

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
        title: (this.project.title).replace(/<[^>]*>?/gm, '')
      }
    },
    computed: {
      timeframeText() {
        return this.project.start + (this.project.ongoing ? ' →' : '<br />↓<br />' + this.project.end); 
      }
    },
    components: {
      SmartList,
      ArticleSection
    },
    // data () {
    //   return {
    //     position: { scrollTop: 0, scrollLeft: 0 }
    //   };
    // },
    mounted () {
      // Set footer color
      if (this.project.sections && this.project.sections.length > 0) {
        this.$nuxt.$emit('footer-bg', this.project.sections[this.project.sections.length - 1].bg)
      }

      if (this.project.previous) {
        this.$nuxt.$emit('previous-link', this.project.previous)
      }

      if (this.project.next) {
        this.$nuxt.$emit('next-link', this.project.next)
      }

      // Enable Lightbox
      new LuminousGallery(
        document.querySelectorAll(".lightbox"),
        {
          caption: function(trigger) {
            console.log('caption for ' + trigger);
            return trigger.querySelector("img").getAttribute("alt");
          }
        }
      );
    }
  }
</script>

<style scoped>
  .title {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: calc(72px + (136 - 72) * ((100vw - 320px) / (1280 - 320)));
    line-height: 1em;
    hyphens: auto;
    @apply bg-center bg-cover break-words;
  }

  .subtitle { 
    @apply leading-tight font-bold w-2/3 pb-8;
    font-size: calc(24px + (56 - 24) * ((100vw - 300px) / (1600 - 300)));
  }
</style>