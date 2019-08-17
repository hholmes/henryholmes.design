<template>
  <transition name="layout" mode="out-in">
    <div>
      <Header />
      <div id="main" role="main">
        <nuxt />
      </div>
      <Footer />
    </div>
  </transition>
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
