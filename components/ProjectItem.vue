<template>
  <nuxt-link :to="url">
    <div class="ProjectItem text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 bg-gray-lighter px-4 sm:px-8 relative scrim-t bg-cover bg-center"
         :style="{ backgroundImage: `url('${ project.cover }')` }">
      <p class="pt-6 mb-2">
        {{ project.title }}
      </p>
      <h2 class="pr-12 leading-tight">
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

