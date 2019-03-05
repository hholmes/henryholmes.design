<template>
	<div>
		<h1>
      {{ title }}
    </h1>
	</div>
</template>

<script>
export default {
  // asyncData: async ({ app, route, payload }) => {
  //   return {
  //     page: (await app.$content("/").get(route.path)) || payload
  //   };
  // }
  async asyncData({ params }) {
    const pageJSON = await require(`~/content/${params.slug}.json`)
    return {
      page: pageJSON.content
    }
  }
}
</script>
