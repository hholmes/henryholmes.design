<template>
  <header class="mainstream relative py-6 z-20 uppercase tracking-wider">
    <nav class="pin-t fixed">
      <ul class="list-reset">
        <li class="mr-8 inline">
          <NuxtLink 
            :class="['text-black', 'font-sans', 'text-sm']" 
            :to="'/'">{{ homeLink ? 'Home' : 'Henry Holmes' }}</NuxtLink>
        </li>
        <li
          v-for="(linkTitle, index) in global.nav"
          class="mr-8 inline"
          :key="index">
          <NuxtLink
            :class="['text-gray-900', 'font-sans', 'text-sm']"
            :to='linkForNavTitle(linkTitle)'>{{ linkTitle }}</NuxtLink>
        </li>
        <!-- <li class="mr-8 inline">
          <span id="css1" class="py-1 px-2 rounded mx-2 bg-red-300">1</span>
          <span id="css2" class="py-1 px-2 rounded mx-2 bg-blue-300">2</span>
          <span id="css3" class="py-1 px-2 rounded mx-2 bg-green-300">3</span>
          <span id="css4" class="py-1 px-2 rounded mx-2 bg-yellow-300">4</span>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
const global = require('~/content/global.json')
const context = require.context('~/content/page/', false, /\.json$/);
const navPages = context.keys().map(key => ({
    ...context(key),
    _path: `/${key.replace('.json', '').replace('./', '')}`
  }));

export default {
  props: ['homeLink'],
  data () {
    return {
      global,
      navPages
    }
  },
  methods: {
    linkForNavTitle(navItem) {
      var path = ''
      this.navPages.forEach(function(page, index) {
        if (page.title.valueOf() == navItem.valueOf()) {
          path = page._path;
        }
      })
      return path;
    }
  }
}
</script>