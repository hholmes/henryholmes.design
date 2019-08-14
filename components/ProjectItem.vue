<template>
  <nuxt-link :to="url">
    <div 
      class="projectCard text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 relative scrim-t bg-cover bg-center"
      :style="{ backgroundImage: `url('${ project.cover }')` }"
      @mouseover="preview = true"
      @mouseleave="preview = false">
      <transition name="project-preview">
        <div v-if="preview" class="absolute inset-0">Project details</div>
      </transition>
      <h4 class="type-sans text-white font-normal text-xs md:text-sm uppercase opacity-80 tracking-widest mb-2">
        {{ project.title }}
      </h4>
      <h2 class="bold pr-12 leading-tight text-4xl">
        {{ project.subtitle }}
      </h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["project", "url"],
  data() {
    return {
      preview: false
    }
  }
}
</script>

<style>
  .project-preview-enter, 
  .project-preview-leave-to {
    opacity: 0;
  }
  .project-preview-enter-to,
  .project-preview-leave {
    opacity: 1;
  }
  .project-preview-enter-active, 
  .project-preview-leave-active {
    transition: opacity 200ms ease-out;
  }
</style>
