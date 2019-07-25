<template>
  <div class="px-2 pb-24 sm:pt-8 lg:pt-16">
    <section class="container font-inter overflow-hidden">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2" v-html="$md.render(intro.body)" />
        <div class="sm:display-hidden md:w-1/4 leading-loose">
          <!-- <h3 class="">Currently</h3>
          <ul class="list-reset">
            <li>Seeking Opportunities</li>
            <li>Feweve fdfds</li>
            <li>Seeking Oppo</li>
          </ul> -->
        </div>
        <div class="sm:w-full md:w-1/4 leading-loose">
          <h3 class="">Previously</h3>
          <ul class="list-reset">
            <li>National Park Service</li>
            <li>92Y</li>
            <li>GuideOne Mobile</li>
          </ul>
        </div>
      </div>
    </section>
    <ProjectsList />
    <ContactForm />
  </div>
  <!-- <LensList /> -->
  <!-- <ArticlesList /> -->
</template>

<script>
import ProjectsList from "~/components/ProjectsList"
import ContactForm from "~/components/ContactForm"
// import LensList from "~/components/LensList"
// import ArticlesList from "~/components/ArticlesList"

const intro = require('~/content/meta/intro.json')

export default {
  data () {
    return {
      intro
    }
  },
  components: {
    ProjectsList,
    ContactForm
    // LensList,
    // ArticlesList
  }
}
</script>

<style>
h1 {
  @apply mb-2;
}
</style>
