<template>
  <div class="leading-loose">
    <h3 class="">
      {{ heading }}
    </h3>
    <ul 
      class="infoList list-reset mb-6 mt-4 md:mt-8 leading-double uppercase text-xs tracking-wider">
      <li v-for="item in items">
        <!-- https://stackoverflow.com/questions/50385958/conditional-a-href-in-vuejs -->
        <component 
          :is="item.href?'a':'span'" :href="item.href || ''" :target="item.external ? '_blank' : '_self'">
          {{ item.title }}
        </component>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    items: {
      required: false
    }
  }
}
</script>

