<template>
  <section class="container">
    <h1>Bring my work into focus</h1>
    <h3>Select a lens to explore:</h3>
    <ul class="block md:flex list-reset">
      <!-- <li
        v-for="lens in lenses"
        class="flex-1 m-4"
        :key="lens.id">
        <LensItem :lens="lens" :url="'/lens/:' + lens.slug" />
      </li> -->
      <li>
        <div class="container shadow p-8">Lens</div>
      </li>
    </ul>
  </section>
</template>

<script>
// import LensItem from "~/components/LensItem"

// const context = require.context('~/content/lens/', false, /\.json$/)
// const lenses = context.keys().map(key => ({
//     ...context(key),
//     _path: `/${key.replace('.json', '').replace('./', '')}`
//   }));

// export default {
//   data () {
//     return {
//       lenses
//     }
//   },
//   components: {
//     LensItem
//   }
// }
</script>
