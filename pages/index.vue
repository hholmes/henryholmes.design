<template>
  <div>
    <section class="flex flex-wrap overflow-hidden mb-rhythm">
      <div class="introTitle w-full md:w-3/5 lg:w-4/6">
        <h1 class="max-w-48 font-serif leading-none">I'm Henry Holmes, a&nbsp;designer.</h1>
        <div 
          class="text-lg mt-8 mb-6 md:mb-0s"
          v-html="$md.render(home.body)" />
      </div>
      <SimpleList 
        class="introList w-1/2 md:w-1/5 lg:w-1/6 sm:border-l-2 md:border-dotted md:px-2 xl:px-4"
        :header="'I can...'" 
        :items="['Design', 'Code', 'Write', 'Teach']" 
        />
      <SimpleList 
        class="introList w-1/2 md:w-1/5 lg:w-1/6 sm:border-l-2 md:border-dotted md:px-2 xl:px-4"
        :header="'Previously,'" 
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
          },
          {
            href: 'https://www.cardsnacks.com/',
            hrefTarget: '_blank',
            content: 'CardSnacks'
          }
        ]"
        />
    </section>
    <ProjectsList 
      class="projectsList flex flex-wrap mb-rhythm"
      :visibleProjects="home.projects"
      />
    <section class="flex flex-wrap overflow-hidden mt-rhythm2x mb-rhythm">
      <div class="details-block md:pl-0 md:w-1/2">
        <h2>How I work</h2>
        <p>Lorem ipsum dolor sit amet, minim molestie argumentum est at, pri legere torquatos instructior ex. Vis id odio atomorum oportere, quem modo fabellas sit at, dicat semper est ne. Apeirian detraxit pri eu. No solum accusam has. Ius ne harum mundi clita, eu pro tation audiam.</p>
      </div>
      <div class="details-block md:w-1/2">
        <img class="w-full" src="https://loremflickr.com/375/275" />
      </div>
    </section>
    <section class="flex flex-wrap md:flex-row-reverse overflow-hidden mb-rhythm2x">
      <div class="details-block md:w-1/2">
        <h2>What matters</h2>
        <p>Lorem ipsum dolor sit amet, minim molestie argumentum est at, pri legere torquatos instructior ex. Vis id odio atomorum oportere, quem modo fabellas sit at, dicat semper est ne. Apeirian detraxit pri eu. No solum accusam has. Ius ne harum mundi clita, eu pro tation audiam.</p>
      </div>
      <div class="details-block md:pl-0 md:w-1/2">
        <img class="w-full" src="https://loremflickr.com/375/275" />
      </div>
    </section>
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

  .projectCard, .details-block {
    padding: calc(theme('spacing.main'));
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
    .projectCard, .introForm, .project-preview, .details-block {
      padding: calc(theme('spacing.main') * 1.5) calc(theme('spacing.main') * 2);
    }
  }

  @screen md {
    .introTitle {
      @apply pl-0 m-0 pr-12;
    }
    .introList {
      margin-top: 7.5rem;
      padding: 0;
    }
    .projectsList {
      margin-left: calc(theme('spacing.main') * -2);
      margin-right: calc(theme('spacing.main') * -2);
    }
    .projectCard, .project-preview, .details-block {
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
    .projectCard, .project-preview, .details-block {
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
    .projectCard, .project-preview, .details-block {
      padding: calc(theme('spacing.main') * 2.5) calc(theme('spacing.main') * 3.5);
    }
  }
</style> 