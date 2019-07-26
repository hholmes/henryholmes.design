<template>
  <nuxt-link :to="url">
    <div class="ProjectItem text-white container rounded overflow-hidden h-64 bg-gray-lighter px-2 sm:px-8 md:px-4 lg:px-8 relative scrim-t">
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

