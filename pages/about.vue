<template>
  <div>
    <div v-html="$md.render(page.body)" />
  </div>
</template>

<script>
  import SmartList from "~/components/SmartList"
  const page = require('~/content/page/about.json')

  export default {
    data () {
      return {
        page
      }
    },
    components: {
      SmartList
    },
    head() {
      return {
        title: this.page.title
      }
    }
  }
</script>
