<template>
  <transition name="layout" mode="out-in">
    <div>
      <Header />
      <div id="main" role="main">
        <nuxt class="mainstream container mt-rhythm" />
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
  data() {
    return {
      admin: false
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key == '\`' && !this.admin) {
        window.open("/admin");
        this.admin = true;
      }
    });
  }
}
</script>
