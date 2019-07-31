<template>
  <div class="container mx-auto px-4 sm:px-8 md:px-12 font-inter">
    <section class="flex flex-wrap overflow-hidden my-rhythm">
      <div class="introTitle w-full md:w-4/6 md:pr-16 lg:pr-32 xl:pr-48">
        <h1 class="max-w-48">I'm Henry Holmes, a&nbsp;designer in Brooklyn.</h1>
        <div 
          v-html="$md.render(intro.body)"
          class="text-lg" />
      </div>
      <PlainList 
        class="introList w-1/2 md:w-1/6"
        :header="'Skills'" 
        :items="['Design', 'Code', 'Write', 'Teach']" 
        />
      <PlainList 
        class="introList w-1/2 md:w-1/6"
        :header="'Previously'" 
        :items="['92Y', 'GuideOne/NPS', 'SmileBack']" 
        />
    </section>
    <ProjectsList 
      class="projectsList flex flex-wrap mb-rhythm"
      />
    <section class="container">
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/6">
          <ContactForm 
            prompt="What's your thing?"
            class="introForm max-w-md"
            />
        </div>
        <div class="column-spacer hidden lg:block lg:w-1/6"></div>
        <div class="w-full text-center md:text-left md:w-2/6 lg:w-1/6 mt-rhythm md:mt-0">
          <h2 class="pb-5">Elsewhere</h2>
          <ul class="list-reset uppercase text-xs tracking-wider">
            <!-- <li><a href="https://facebook.com/hholmes" target="_blank">Facebook</a></li> -->
            <li class="mb-6">
              <a href="https://twitter.com/syntactile" target="_blank">twitter</a>
            </li>
            <li class="mb-6">
              <a href="https://github.com/hholmes" target="_blank">github</a>
            </li>
            <li class="mb-6">
              <a href="https://www.linkedin.com/in/henryjholmes/" target="_blank">linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsList from "~/components/ProjectsList"
import ContactForm from "~/components/ContactForm"
import PlainList from "~/components/PlainList"

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
    PlainList
  }
}
</script>

<style>
.introList {
  margin-top: calc(theme('spacing.main') * 2);
  padding-left: calc(theme('spacing.main'));
  padding-right: calc(theme('spacing.main'));
}

.projectCard {
  padding: calc(theme('spacing.main')) calc(theme('spacing.main'));
}

.introForm {
  margin-left: theme('spacing.main');
  margin-right: theme('spacing.main');
}


@screen sm {
  .introTitle, .introForm {
    margin-left: calc(theme('spacing.main') * 2);
    margin-right: calc(theme('spacing.main') * 2);
  }
  .introList {
    padding-left: calc(theme('spacing.main') * 2);
  }
  .projectsList {
    margin-left: calc(theme('spacing.main') * -.5);
    margin-right: calc(theme('spacing.main') * -.5);
  }
  .projectCard {
    padding: calc(theme('spacing.main') * 1.5) calc(theme('spacing.main') * 2);
  }
}

@screen md {
  .introTitle {
    @apply pr-16 pl-0 m-0;
  }
  .introList {
    margin-top: 6.75rem;
    padding: 0;
  }
  .introList h3 {
    margin-bottom: 2.25rem;
  }
  .projectsList {
    margin-left: calc(theme('spacing.main') * -2);
    margin-right: calc(theme('spacing.main') * -2);
  }
  .projectCard {
    padding: calc(theme('spacing.main') * 1) calc(theme('spacing.main') * 1.5);
  }
}

@screen lg {
  .introTitle {
    @apply pr-32;
  }
  .introList {
    margin-top: 4rem;
  }
  .projectsList {
    margin-left: calc(theme('spacing.main') * -2);
    margin-right: calc(theme('spacing.main') * -2);
  }
  .projectCard {
    padding: calc(theme('spacing.main') * 1) calc(theme('spacing.main') * 1.5);
  }
}

@screen xl {
  .introTitle {
    padding-left: calc(theme('spacing.main') * 2);
    @apply pr-64;
  }
  .projectCard {
    padding: calc(theme('spacing.main') * 2.5) calc(theme('spacing.main') * 3.5);
  }
}
</style>