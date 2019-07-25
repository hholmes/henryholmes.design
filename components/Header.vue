<template>
  <header class="pin-t p-2">
    <ul class="list-reset">
      <!-- <li class="mr-8 inline">
        <a :href='"/"'>Henry Holmes</a>
      </li>
      <span
        v-for="link in navPages"
        :key="link.id">
        <li
          v-if="header.pages.includes(link.title)"
          class="mr-8 inline">
          <a :href='link._path'>{{ link.title }}</a>
        </li>
      </span> -->
    </ul>
  </header>
</template>

<script>
const header = require('~/content/meta/header.json')
const context = require.context('~/content/page/', false, /\.json$/);
const navPages = context.keys().map(key => ({
    ...context(key),
    _path: `/${key.replace('.json', '').replace('./', '')}`
  }));
// console.log(navPages)
// console.log(header.pages)
export default {
  data () {
    return {
      header,
      navPages
    }
  }
}
</script>

<style lang="postcss">
a {
  @apply no-underline text-indigo-dark
}
a:hover {
  @apply text-orange-dark
}
</style>