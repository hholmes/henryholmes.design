<template>
  <div v-scroll:throttle="{fn: onScroll, throttle: 500 }"
    class="overflow-hidden">
    <!-- <div class="projectCover flex block items-end px-4 md:px-0 pt-16 bg-cover bg-bottom bg-scroll md:bg-fixed text-white scrim-b">
              :style="{ backgroundImage: `url('${ project.cover }')` }"> -->
    <div class="cover mainstream flex items-center min-h-screen-1/2 lg:min-h-screen-2/3">
      <div>
        <h1 class="title"
          :style="{ backgroundImage: `url('${ project.cover }')` }">
          {{ project.title }}
        </h1>
        <p class="subtitle">{{ project.subtitle }}</p>
      </div>
    </div>
    <section class="flex flex-wrap items-top mainstream min-h-screen-1/2 md:min-h-screen-1/4 md:mb-rhythm lg:min-h-screen-1/3">
      <PlainList
        class="w-1/2 md:w-1/4"
        :header="'Timeframe'" 
        :items="[timeframeText]"
        />
      <PlainList
        class="w-1/2 md:w-1/4"
        :header="'Roles'" 
        :items='project.roles'
        />
      <PlainList
        class="w-1/2 md:w-1/4"
        :header="'Tasks'" 
        :items="project.tasks"
        />
      <PlainList
        class="w-1/2 md:w-1/4"
        :header="'Tools'" 
        :items="project.tools"
        />
    </section>
    <content class="flex flex-wrap mainstream">
      <section 
        v-for="section in project.sections" 
        :key="section.id"
        class="flex flex-wrap clearfix mb-rhythm">
        <h2 class="w-full lg:pr-8 lg:-mt-2 lg:leading-none lg:w-1/4">{{ section.heading }}</h2>
        <div 
          class="w-full lg:w-2/4 xl:max-w-full"
          v-html="$md.render(section.body)" />
        <!-- <span class="inline-block bg-gray-lighter rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2">
          {{ section.topic }}
        </span> -->
      </section>
    </content>
  </div>
</template>

<script>
import PlainList from "~/components/PlainList"

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
      return this.project.start + (this.project.ongoing ? ' →' : '<br />↓<br />' + this.project.end); 
    }
  },
  // layout: 'project',
  components: {
    PlainList
  },
  data: function() {
    return {
      position: { scrollTop: 0, scrollLeft: 0 }
    };
  },
  methods: {
    onScroll: function(e, position) {
      console.log(position);
    }
  }
}
</script>

<style>
.title {
  @apply inline-flex bg-center bg-cover;
  white-space: nowrap;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 6rem;
  line-height: 6rem;
  height: 6rem;
}

.subtitle { 
  @apply leading-none text-4xl font-bold max-w-sm pb-8;
}

@screen sm {
  .title {
    @apply -ml-1;
    font-size: 8rem;
    line-height: 8rem;
    height: 9rem;
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
    @apply text-4xl -mt-12;
  }
}

@screen lg {
  .title {
    font-size: 18rem;
    line-height: 18rem;
    height: 20rem;
  }
  .subtitle {
    @apply text-6xl max-w-lg;
  }
}

@screen xl {
  .title {
    @apply -ml-4;
    font-size: 20rem;
    line-height: 20rem;
    height: 22rem;
  }
}

</style>