<template>
  <footer 
    :style="{ backgroundColor: bg || '' }" 
    class="text-sm text-gray text-center py-rhythm type-sans">
    <fa :icon="['fas','heart']"></fa>
  </footer>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'

  export default {
    props: [
      "bg"
    ],
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