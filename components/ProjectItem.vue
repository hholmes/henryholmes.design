<template>
  <nuxt-link :to="url">
    <div class="ProjectItem text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 bg-gray-lighter px-4 sm:px-8 relative scrim-t bg-cover bg-center"
         :style="{ backgroundImage: `url('${ project.cover }')` }">
      <p class="text-xs md:text-sm opacity-75 uppercase tracking-wide mt-4 md:mt-8 mb-1">
        {{ project.title }}
      </p>
      <h2 class="pr-12 leading-tight text-2xl">
        {{ project.subtitle }}
      </h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["project", "url"]
}
</script>

