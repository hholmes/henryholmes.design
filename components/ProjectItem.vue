<template>
  <nuxt-link :to="url">
    <div class="ProjectItem container rounded overflow-hidden h-64 md:px-4 xl:px-6 bg-grey-lighter">
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

