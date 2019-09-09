<template>
  <div>
    <div v-html="$md.render(page.body)" />
  </div>
</template>

<script>
  import SimpleList from "~/components/SimpleList"
  const page = require('~/content/page/about.json')

  export default {
    data () {
      return {
        page
      }
    },
    components: {
      SimpleList
    },
    head() {
      return {
        title: this.page.title
      }
    }
  }
</script>
