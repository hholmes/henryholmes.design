<template>
  <nuxt-link :to="url">
    <div 
      class="projectCard text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 relative scrim-t bg-cover bg-center"
      :style="{ backgroundImage: `url('${ project.cover }')` }"
      @mouseenter="showTopics = true"
      @mouseleave="showTopics = false">
      <h4 class="type-sans text-white font-normal text-xs md:text-sm uppercase opacity-80 tracking-widest mb-2">
        {{ project.title }}
      </h4>
      <h2 class="bold pr-12 leading-tight text-4xl">
        {{ project.subtitle }}
      </h2>
      <transition-group
        name="topics-preview"
        tag="ul"
        class="absolute inset-x-0 bottom-0 project-preview"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li
          class="inline-block bg-white text-gray-900 type-sans font-bold uppercase tracking-wider rounded py-1 px-3 mr-2 mt-2"
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
// https://vuejs.org/v2/guide/transitions.html#Using-Transitions-and-Animations-Together

export default {
  props: ["project", "url"],
  data() {
    return {
      showTopics: false,
      numTopics: 0,
      topics: []
    }
  },
  computed: {
    projectTopics: function() {
      if (this.showTopics) {
        if (this.topics.length < 1 && this.project.sections && this.project.sections.length > 0) {
          this.project.sections.forEach(section => {
            if (section.topic != null && section.topic != "Generic" && this.topics.indexOf(section.topic) < 0)
              this.topics.push(section.topic)
          });
        }
        return this.topics
      } else {
        return []
      }
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var i = el.dataset.index
      if (i > this.numTopics)
          this.numTopics = i
      var delay = i * 50
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, translateY: ['0%', '25%'] },
          { easing: 'easeOutExpo'},
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = (this.numTopics - el.dataset.index) * 50
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, translateY: '25%' },
          { easing: 'easeOutExpo'},
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
