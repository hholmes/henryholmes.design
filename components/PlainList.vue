<template>
  <div class="leading-loose">
    <h4>
      {{ header }}
    </h4>
    <ul class="list-reset uppercase tracking-widest text-xs">
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

