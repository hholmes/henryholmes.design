<template>
  <nuxt-link :to="url">
    <div class="ArticleItem container max-w-sm p-8">
      <h4 class="text-black pb-2">
        {{ article.description }}
      </h4>
      <p>{{ article.cta }} ›</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["article", "url"]
}
</script>

