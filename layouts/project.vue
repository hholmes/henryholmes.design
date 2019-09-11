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
  import pkg from '../package'
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
        rightContents: '',
        coverImage: '',
        admin: false
      }
    },
    created() {
      this.$nuxt.$on('footer-bg', (e) => {
        this.footerBg = e;
      });
      this.$nuxt.$on('previous-link', (e) => {
        this.leftContents = e;
      });
      this.$nuxt.$on('next-link', (e) => {
        this.rightContents = e;
      });
      this.$nuxt.$on('cover-image', (e) => {
        this.coverImage = e;
      });
    },
    mounted() {
      // console.log('template mounted')
      this.$nuxt.$on('clicked', function(value) {
        alert('clicked! ' + value);
      });
      window.addEventListener('keydown', (e) => {
        if (e.key == '\`' && !this.admin) {
          window.open("/admin");
          this.admin = true;
        }
      });
    },
    head() {
      return {
        meta: [
          // Open Graph
          { hid: `url`, name: 'og:url', content: 'https://www.henryholmes.design' + this.$route.path },
        ]
      }
    }
  }
</script>
