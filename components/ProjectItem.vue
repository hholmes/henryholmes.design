<template>
  <nuxt-link :to="url">
    <div class="ProjectItem container max-w-sm rounded overflow-hidden shadow-md p-8">
      <h2 class="text-black pb-2">
        {{ project.title }}
      </h2>
      <p>
        {{ project.subtitle }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["project", "url"]
}
</script>

