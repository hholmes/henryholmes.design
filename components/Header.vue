<template>
  <header class="pin-t p-2">
    <!-- IN PROGRESS
       <ul v-for="pageLink in header.pages" :key="pageLink.id">
      <li>
        <a :href="`/${pageLink}`">{{ pageLink }}</a>
      </li>
    </ul> -->
    <!-- <nuxt-link to="/" class="mr-8">
      Home
    </nuxt-link>
    <nuxt-link to="/about" class="mr-8">
      About
    </nuxt-link>
    <nuxt-link to="/cv" class="mr-8">
      CV
    </nuxt-link>
    <nuxt-link to="/project/smileback" class="mr-8">
      SmileBack
    </nuxt-link>
    <nuxt-link to="/project/dancemaker">
      Dancemaker
    </nuxt-link> -->
  </header>
</template>

<script>
export default {
  async asyncData({ params, route }) {
    const headerData = await import('~/content/meta/header.json')
    return {
      header: headerData
    }
  }
}
</script>
