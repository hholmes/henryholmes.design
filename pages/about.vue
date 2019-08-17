<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="$md.render(page.body)" />
    <SimpleList 
          class="w-full text-center md:text-left mt-rhythm md:mt-8"
          :useIcons="true"
          :items="[
            {
              icon: ['fab', 'spotify'],
              iconColor: 'text-green-300',
              content: 'Spotify for Dogs'
            },
            {
              icon: ['fab', 'lyft'],
              iconColor: 'text-red-400',
              content: 'Bat Cars'
            },
            {
              icon: ['fab', 'tumblr'],
              iconColor: 'text-blue-600',
              content: 'No Porn'
            }
          ]"
        />
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
