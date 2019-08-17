<template>
  <div class="mainstream container mt-rhythm">
    <section class="flex flex-wrap overflow-hidden mb-rhythm">
      <div class="introTitle w-full md:w-4/6">
        <h1 class="max-w-48 type-serif leading-none">I'm Henry Holmes, a&nbsp;designer.</h1>
        <div 
          class="text-lg mt-8 mb-6 md:mb-0s"
          v-html="$md.render(home.body)" />
      </div>
      <SimpleList 
        class="introList w-1/2 md:w-1/6"
        :header="'Skills'" 
        :items="['Design', 'Code', 'Write', 'Teach']" 
        />
      <SimpleList 
        class="introList w-1/2 md:w-1/6"
        :header="'Previously'" 
        :items="[
          {
            href: 'https://92y.org',
            hrefTarget: '_blank',
            content: '92Y'
          },
          '<a href=\'https://www.nps.gov/yose/planyourvisit/app.htm\' target=\'_blank\'>NPS</a>/<a href=\'http://guideonemobile.com/\' target=\'_blank\'>GuideOne</a>', 
          {
            href: 'http://smileback.co/',
            hrefTarget: '_blank',
            content: 'SmileBack'
          }
        ]"
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
            class="introForm"
            />
        </div>
        <div class="column-spacer hidden md:block md:w-1/6"></div>
        <SimpleList 
          class="w-full text-center md:text-left md:w-1/6 lg:w-1/6 mt-rhythm pt-2 md:mt-8"
          :header="'Elsewhere'"
          :useIcons="true"
          :items="[
            {
              href: home.twitter,
              hrefTarget: '_blank',
              icon: ['fab', 'twitter'],
              iconColor: 'text-gray-300',
              content: 'twitter'
            },
            {
              href: home.github,
              hrefTarget: '_blank',
              icon: ['fab', 'github'],
              iconColor: 'text-gray-300',
              content: 'github'
            },
            {
              href: home.linkedin,
              hrefTarget: '_blank',
              icon: ['fab', 'linkedin'],
              iconColor: 'text-gray-300',
              content: 'linkedin'
            }
          ]"
        />
      </div>
    </section>
  </div>
</template>

<script>
  import ProjectsList from "~/components/ProjectsList"
  import ContactForm from "~/components/ContactForm"
  import SimpleList from "~/components/SimpleList"

  const home = require('~/content/home.json')

  export default {
    data () {
      return {
        home
      }
    },
    components: {
      ProjectsList,
      ContactForm,
      SimpleList
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
    @apply w-full;
  }

  @screen sm {
    .introList {
      padding-left: calc(theme('spacing.main') * 2);
    }
    .projectsList {
      margin-left: calc(theme('spacing.main') * -.5);
      margin-right: calc(theme('spacing.main') * -.5);
    }
    .projectCard, .introForm, .project-preview {
      padding: calc(theme('spacing.main') * 1.5) calc(theme('spacing.main') * 2);
    }
  }

  @screen md {
    .introTitle {
      @apply pl-0 m-0 pr-16;
    }
    .introList {
      margin-top: 4.25rem;
      padding: 0;
    }
    .projectsList {
      margin-left: calc(theme('spacing.main') * -2);
      margin-right: calc(theme('spacing.main') * -2);
    }
    .projectCard, .project-preview {
      padding: calc(theme('spacing.main') * 1.5) calc(theme('spacing.main') * 1.5);
    }
    .introForm {
      @apply px-0 max-w-md;
    }
  }

  @screen lg {
    .introTitle {
      @apply pr-24;
    }
    .introList {
      margin-top: 4.25rem;
    }
    .projectsList {
      margin-left: calc(theme('spacing.main') * -3);
      margin-right: calc(theme('spacing.main') * -3);
    }
    .projectCard, .project-preview {
      padding: calc(theme('spacing.main') * 2) calc(theme('spacing.main') * 2.5);
    }
  }

  @screen xl {
    .introTitle {
      @apply pr-48;
    }
    .introList {
      margin-top: 4.25rem;
    }
    .projectsList {
      margin-left: calc(theme('spacing.main') * -4);
      margin-right: calc(theme('spacing.main') * -4);
    }
    .projectCard, .project-preview {
      padding: calc(theme('spacing.main') * 2.5) calc(theme('spacing.main') * 3.5);
    }
  }
</style>