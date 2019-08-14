<template>
  <nuxt-link :to="url">
    <div 
      class="projectCard text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 relative scrim-t bg-cover bg-center"
      :style="{ backgroundImage: `url('${ project.cover }')` }"
      @mouseover="preview = true"
      @mouseleave="preview = false">
      <h4 class="type-sans text-white font-normal text-xs md:text-sm uppercase opacity-80 tracking-widest mb-2">
        {{ project.title }}
      </h4>
      <h2 class="bold pr-12 leading-tight text-4xl">
        {{ project.subtitle }}
      </h2>
      <transition-group
        name="topics"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li
          class="inline-block bg-gray-200 text-black rounded py-1 px-2 mr-2"
          v-for="(topic, index) in projectTopics"
          v-bind:key="topic"
          v-bind:data-index="index"
        >{{ topic }}</li>
      </transition-group>
    </div>
  </nuxt-link>
</template>

<script>
// https://snipcart.com/blog/vuejs-transitions-animations

export default {
  props: ["project", "url"],
  data() {
    return {
      preview: false,
      topics: []
    }
  },
  computed: {
    projectTopics: function() {
      if (this.project.sections && this.project.sections.length > 0) {
        this.project.sections.forEach(section => {
          if (section.topic != null && section.topic != "Generic")
            this.topics.push(section.topic)
        });
      }
      return topics;
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>

<style>
  .project-preview-enter, 
  .project-preview-leave-to {
    opacity: 0;
    transform: translateY(0px);
  }
  .project-preview-enter-to,
  .project-preview-leave {
    opacity: 1;
    transform: translateY(20%);
  }
  .project-preview-enter-active, 
  .project-preview-leave-active {
    transition: opacity transform;
  }
</style>
