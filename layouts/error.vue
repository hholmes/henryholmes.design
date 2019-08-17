<template>
  <div>
    <div id="main" role="main">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>Something went wrong.</h1>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
