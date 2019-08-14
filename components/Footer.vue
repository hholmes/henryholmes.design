<template>
  <footer class="text-sm text-gray text-center my-rhythm type-sans">
    <fa :icon="['fas','heart']"></fa>
  </footer>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'

  export default {
    computed: {
      fas () {
         return fas
      },
      fab () {
         return fab
      }
    },
  }
</script>