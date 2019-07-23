<template>
  <div class="container">
    <h1>Get inside my head</h1>
    <h3>Dive into something I've written</h3>
    <ul class="block md:flex list-reset">
      <li
        v-for="article in articles"
        class="flex-1 m-4"
        :key="article.id">
        <ArticleItem :article="article" :url="'/article' + article._path" />
      </li>
    </ul>
  </div>
</template>

<script>
import ArticleItem from "~/components/ArticleItem"

const context = require.context('~/content/article/', false, /\.json$/)
const articles = context.keys().map(key => ({
    ...context(key),
    _path: `/${key.replace('.json', '').replace('./', '')}`
  }));

export default {
  data () {
    return {
      articles
    }
  },
  components: {
    ArticleItem
  }
}
</script>
