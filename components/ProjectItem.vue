<template>
  <nuxt-link :to="url">
    <div class="ProjectItem container max-w-sm rounded overflow-hidden shadow-md p-8">
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

