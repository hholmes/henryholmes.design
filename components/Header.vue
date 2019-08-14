<template>
  <header class="mainstream relative py-6 z-20 uppercase tracking-wider">
    <nav class="pin-t fixed">
      <ul class="list-reset">
        <li class="mr-8 inline">
          <a class="text-black type-sans font-bold" :href='"/"'>Henry Holmes</a>
        </li>
        <span
          v-for="link in navPages"
          :key="link.id">
          <li
            v-if="header.pages.includes(link.title)"
            class="mr-8 inline">
            <a class="text-gray-900 type-sans font-bold" :href='link._path'>{{ link.title }}</a>
          </li>
        </span>
      </ul>
    </nav>
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

</style>