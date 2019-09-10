import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '../static/images/error.svg'
import loading from '../static/images/loading.svg'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
})
