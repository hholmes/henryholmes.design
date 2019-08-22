<template>
  <footer 
    :style="{ backgroundColor: bg || '' }" 
    class="text-sm text-gray py-rhythm font-sans">
    <div class="mainstream flex">
      <div class="hidden lg:block lg:w-1/4"></div>
      <div class="w-1/3 lg:w-1/6">
        <span v-if="leftContents" v-html="leftContents" />
      </div>
      <div class="w-1/3 lg:w-1/6 text-center">
        <fa :icon="['fas','heart']" class="text-sm"></fa>
      </div>
      <div class="w-1/3 lg:w-1/6 text-right">
        <span v-if="rightContents" v-html="rightContents" />
      </div>
      <div class="hidden lg:block lg:w-1/4"></div>
    </div>
  </footer>
</template>

<script>
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'

  export default {
    props: [
      "bg",
      "left-contents",
      "right-contents"
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