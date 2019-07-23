<template>
  <nuxt-link :to="url">
    <div class="LensItem container max-w-sm rounded overflow-hidden shadow-md p-8">
      <h4 class="text-black pb-2">
        {{ lens.title }}
      </h4>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["lens", "url"]
}
</script>

