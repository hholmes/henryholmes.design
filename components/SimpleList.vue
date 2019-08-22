<template>
  <div class="leading-loose">
    <h3 v-if="header">
      {{ header }}
    </h3>
    <ul :class="[useIcons ? 'fa-ul' : '', 'leading-loose', 'list-reset', 'uppercase', 'tracking-widest', 'text-sm', 'mt-10', 'font-sans']">
      <li 
        v-for="(item, index) in items"
        :key="index">
        <SmartItem v-if="typeof(item) === 'object'" :isList=true :href="item.href" :target="item.hrefTarget" :icon="item.icon" :iconColor="item.iconColor" :content="item.content" />
        <SmartItem v-else-if="typeof(item) === 'string'" :content="item" />
      </li>
    </ul>
  </div>
</template>

<script>
  import SmartItem from "~/components/SmartItem"

  export default {
    props: [
      'header',
      'items',
      'useIcons'
    ],
    components: {
      SmartItem
    }
  }
</script>
