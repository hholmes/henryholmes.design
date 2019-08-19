<template>
  <transition name="project" mode="out-in">
    <div>
      <Header :homeLink="false" />
      <div id="main" role="main">
        <nuxt />
      </div>
      <Footer :bg="this.footerBg" :left-contents="leftContents" :right-contents="rightContents" />
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
      footerBg: '',
      leftContents: '',
      rightContents: ''
    }
  },
  created() {
    this.$nuxt.$on('footer-bg', (e) => {
      this.footerBg = e;
    });
    this.$nuxt.$on('left-contents', (e) => {
      this.leftContents = e;
    });
    this.$nuxt.$on('right-contents', (e) => {
      this.rightContents = e;
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
