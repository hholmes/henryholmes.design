<template>
  <main class="container p-2">
    <div>
      <h1 class="intro mb-8 sm:text-5xl md:text-6xl">
        {{ title }}
      </h1>
      <div v-html="$md.render(body)" />
    </div>
  </main>
</template>

<script>
  const cloneDeep = require('clone-deep');
  export default {
    async asyncData({ params, app, payload, route, store }) {
      const thisPage = await import('~/content/pages/' + params.slug + '.json')
      return cloneDeep(thisPage)
    }
  }
</script>
