<template>
  <transition name="project" mode="out-in">
    <div>
      <Header :homeLink="true" />
      <div id="main" role="main">
        <nuxt />
      </div>
      <Footer :bg="this.footerBg" :left-contents="'left'" :right-contents="'<a href=\'#\'>right →</a>'" />
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
      footerBg: ''
    }
  },
  created() {
    // console.log('template created')
    this.$nuxt.$on('footer-bg', (e) => {
      // console.log('got color: ' + e);
      this.footerBg = e;
    });
  },
  mounted() {
    // console.log('template mounted')
    this.$nuxt.$on('clicked', function(value) {
      alert('clicked! ' + value);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        window.open("/admin");
      }
    });
  }
}
</script>
