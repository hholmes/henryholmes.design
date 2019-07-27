<template>
  <div class="leading-loose">
    <h3 class="">
      {{ header }}
    </h3>
    <ul class="list-reset mb-6 mt-4 md:mt-8 uppercase tracking-wider text-xs leading-double text-gray-600">
      <li 
        v-for="item in items"
        :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    "header", 
    "items"
  ]
}
</script>

