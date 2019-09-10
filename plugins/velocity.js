import Vue from 'vue'
import velo from 'velocity-animate'
import 'velocity-animate/velocity.ui'

// https://medium.com/@codebeast_/why-your-third-party-plugin-dont-work-in-nuxt-and-how-to-fix-it-d1a8caadf422

const Velocity = {
  install(Vue, options) {
    Vue.component('velocity-animate', velo)
  }
}

Vue.use(Velocity)

export default Velocity
