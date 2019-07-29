<template>
  <div class="leading-loose">
    <h3 class="mb-4">
      {{ header }}
    </h3>
    <ul class="list-reset md:mt-8 uppercase tracking-wider text-xs leading-double text-gray-600">
      <li 
        v-for="item in items"
        :key="item">
        <span v-html="item" />
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

