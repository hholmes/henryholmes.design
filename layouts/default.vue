<template>
  <div>
    <Header />
    <div id="main" role="main">
      <nuxt />
  </div>
  <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
