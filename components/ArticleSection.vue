<template>
  <section>
    <div :style="{ backgroundColor: colors.bg, color: colors.fg }">
      <img class="w-full my-0" :src="banner.src" :alt="banner.alt" :title="banner.title" />
      <div class="mainstream flex flex-wrap clearfix py-rhythm">
        <h2 class="hyphenate w-full mb-rhythm break-words 
          sm:text-center 
          lg:text-left lg:pr-8 lg:mb-auto lg:text-xl lg:mt-1 
            lg:leading-tight lg:w-1/4 
          xl:pr-16 xl:text-2xl xl:mt-0"
          v-html="title"></h2>
        <div 
          class="section-content w-full lg:w-2/4 xl:max-w-full"
          v-lazy-container="{ selector: 'img' }"
          v-html="processImages($md.render(body))" />
      </div>
    </div>
  </section>
</template>

<script>
  const cheerio = require('cheerio')
  
  export default {
    props: ["banner", "colors", "title", "body"],
    methods: {
      processImages: function(html) {
        const c = cheerio.load(html)
        c('ol').children('li').each(function(i, list) {
          c(this).replaceWith('<li><span>' + c(this).html())
        });
        c('img').each(function(i, image) {
          var url = c(this).attr('src')
          if (c(this).hasClass('section-break')) {
            c(this)
            .replaceWith('<hr class=\'section-break\' style=\'background-image: url(' + url + ')\'>')
          } else {
            c(this)
            .attr('data-src', url).attr('src',null)
            .append(c(this).attr('title') ? '<figcaption>' + c(this).attr('title') + '</figcaption>' : '')
            .wrap('<a href=\'' + url + '\' class=\'lightbox\'>')
            .wrap('<figure' + (c(this).hasClass('float-aside') ? '>' : ' class="inline-block">'))
          }
        });
        c('pre').each(function(i, snippet) {
          c(this)
            .wrap('<figure>')
            .after(c(this).children('code').attr('title') ? '<figcaption>' + c(this).children('code').attr('title') + '</figcaption>' : '')
        });
        return c.html();
      }
    }
  }
</script>

<style>
  pre {
    max-height: 50vh;
    @apply text-sm mb-1 p-4 bg-light-gray overflow-scroll;
  }

  ol {
    @apply flex flex-wrap list-inside list-decimal text-xl;
    counter-reset: ol-counter;
  }
  ol li::before {
    @apply align-text-top font-bold font-sans -ml-24 w-24 pr-12;
    content: counter(ol-counter);
  }
  ol li {
    @apply flex mt-rhythm1/2x ml-24 pr-8;
    counter-increment: ol-counter;
  }

  @screen md {
    ol li::before {
      @apply pr-20;
    }
  }

  @screen lg {
    ol {
      @apply list-outside;
    }
    ol li::before {
      @apply mr-0 absolute -ml-12 w-4 text-right;
    }
    ol li {
      @apply border-l border-dotted border-black-300t pl-main -ml-main;
    }
  }
</style>