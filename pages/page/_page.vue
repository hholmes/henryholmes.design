<template>
  <div class="m-4">
    <div v-html="$md.render(post.body)" />
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  // asyncData: async ({ app, route, payload }) => {
  //   return {
  //     page: (await app.$content("/").get(route.path)) || payload
  //   };
  // }
  async asyncData({ params, route }) {
    const pageData = await import('~/content/page/' +
      route.params.page +
      '.json')
    return {
      post: pageData
    }
  },
  // async asyncData ({ params }) {
  //   let { pageData } = await axios.get(`~/content/page/${params.slug}.json`)
  //   return { page: pageData }
  // },
  head() {
    return {
      title: this.post.title + ' | Henry Holmes'
    }
  }
}
</script>
