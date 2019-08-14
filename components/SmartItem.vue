<template>
  <span>
    <fa v-if="icon" :icon="icon" :class="[ isList ? 'fa-li' : '', iconColor ]" />
    <a v-if="href" :href="href" :target="hrefTarget || '_self'">{{ content }}</a>
    <span v-else v-html="content" />
  </span>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  
  export default {
    props: {
      isList: Boolean,
      icon: Array,
      iconColor: String,
      href: String,
      hrefTarget: String,
      content: String
    },
    computed: {
      fas () {
          return fas
      },
      fab () {
          return fab
      }
    }
  }
</script>

<style>
  .fa-ul {
    @apply mr-1 list-outside mr-10;
  }
  .fa-li {
    @apply relative -mr-6;
  }

  @screen md {
    .fa-ul {
      @apply mr-auto list-inside mr-0;
    }
    .fa-li {
      @apply absolute text-lg leading-relaxed mt-1 mr-0 -ml-2;
    }
    .fa-ul li {
      @apply mb-2;
    }
  }

  @screen lg {
    .fa-ul {
      @apply list-outside ml-0;
    }
  }
</style>