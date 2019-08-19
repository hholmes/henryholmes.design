<template>
  <header class="mainstream relative py-6 z-20 uppercase tracking-wider">
    <nav class="pin-t fixed">
      <ul class="list-reset">
        <li class="mr-8 inline">
          <NuxtLink 
            :class="['text-black', 'type-sans', 'text-sm']" 
            :to="'/'">{{ homeLink ? 'Home' : 'Henry Holmes' }}</NuxtLink>
        </li>
        <span
          v-for="link in navPages"
          :key="link.id">
          <li
            v-if="global.nav.includes(link.title)"
            class="mr-8 inline">
            <NuxtLink 
              :class="['text-gray-900', 'type-sans', 'text-sm']" 
              :to='link._path'>{{ link.title }}</NuxtLink>
          </li>
        </span>
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
  }
}
</script>