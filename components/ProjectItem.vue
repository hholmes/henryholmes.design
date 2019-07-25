<template>
  <nuxt-link :to="url">
    <div class="ProjectItem container rounded overflow-hidden px-8 pb-6 h-full">
      <p class="pt-6 mb-2">
        {{ project.title }}
      </p>
      <h2>
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

