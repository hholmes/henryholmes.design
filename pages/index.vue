<template>
  <div class="container mx-auto px-4 sm:px-8 md:px-12 font-inter">
    <section class="flex flex-wrap overflow-hidden">
      <div class="introTitle w-full md:w-4/6 md:pr-16 lg:pr-32 xl:pr-48">
        <h1 class="max-w-48">I'm Henry Holmes, a&nbsp;designer in Brooklyn.</h1>
        <div v-html="$md.render(intro.body)" />
      </div>
      <IntroList 
        class="introList w-1/2 md:w-1/6"
        :header="'Skills'" 
        :items="[{
            title: 'Design'
          },{
            title: 'Code'
          }, {
            title: 'Write'
          }, {
            title: 'Teach'
          }]" 
        />
      <IntroList 
        class="introList w-1/2 md:w-1/6"
        :header="'Previously'" 
        :items="[{
            title: '92Y'
          },{
            title: 'SmileBack'
          }, {
            title: 'NPS w/GuideOne'
          }]" 
        />
    </section>
    <ProjectsList 
      class="projectsList flex flex-wrap"
      />
    <section class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/6">
          <ContactForm 
            prompt="What's your thing?"
            class="introForm"
            />
        </div>
        <div class="column-spacer hidden lg:block lg:w-1/6"></div>
        <div class="w-full text-center md:text-left md:w-2/6 lg:w-1/6 mt-rhythm md:mt-0">
          <h3 class="pb-5">Me, elsewhere</h3>
          <ul class="list-reset list-loose">
            <!-- <li><a href="https://facebook.com/hholmes" target="_blank">Facebook</a></li> -->
            <li><a href="https://twitter.com/syntactile" target="_blank">twitter</a></li>
            <li><a href="https://github.com/hholmes" target="_blank">github</a></li>
            <li><a href="https://www.linkedin.com/in/henryjholmes/" target="_blank">linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsList from "~/components/ProjectsList"
import ContactForm from "~/components/ContactForm"
import IntroList from "~/components/IntroList"

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
    IntroList
  }
}
</script>
