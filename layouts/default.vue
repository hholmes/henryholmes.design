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
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        window.open("/admin");
      }
    });
  }
}
</script>

<style>
</style>
