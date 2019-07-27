<template>
  <div class="container mx-auto px-4 sm:px-8 md:px-12 pt-8 font-inter">
    <section class="container overflow-hidden sm:px-8 md:px-0 lg:my-12 xl:my-16">
      <div class="flex flex-wrap">
        <div class="w-full pr-4 lg:pr-8 md:w-1/2">
          <h1 class="mb-6max-w-48">I'm Henry Holmes, a designer in Brooklyn.</h1>
          <div v-html="$md.render(intro.body)" />
        </div>
        <div class="sm:display-hidden md:w-1/4 leading-loose"></div>
        <div class="w-full text-center md:text-left md:w-1/4 leading-loose">
          <h3 class="pb-2 md:pb-6 md:mt-2">Previously</h3>
          <ul class="list-reset mb-6 uppercase tracking-wider text-xs leading-double text-gray-600">
            <li>92Y</li>
            <li>SmileBack</li>
            <li>GuideOne / NPS</li>
          </ul>
        </div>
      </div>
    </section>
    <ProjectsList />
    <section class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:pr-2 md:w-3/4">
          <ContactForm />
        </div>
        <div class="w-full text-center md:text-left md:w-1/4 pt-1 px-4 px-0 mt-16 md:mt-0 md:px-0">
          <h3 class="pb-6">Me, elsewhere</h3>
          <ul class="list-reset leading-loose">
            <!-- <li><a href="https://facebook.com/hholmes" target="_blank">Facebook</a></li> -->
            <li><a href="https://twitter.com/syntactile" target="_blank">twitter</a></li>
            <li><a href="https://github.com/hholmes" target="_blank">github</a></li>
            <li><a href="https://www.linkedin.com/in/henryjholmes/" target="_blank">linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <!-- <LensList /> -->
  <!-- <ArticlesList /> -->
</template>

<script>
import ProjectsList from "~/components/ProjectsList"
import ContactForm from "~/components/ContactForm"
// import SocialLinks from "~/components/SocialLinks"
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
    ContactForm,
    // SocialLinks
    // LensList,
    // ArticlesList
  }
}
</script>
