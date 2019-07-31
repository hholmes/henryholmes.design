<template>
  <nuxt-link :to="url">
    <div class="projectCard text-white container rounded overflow-hidden h-screen-1/3 lg:h-screen-1/2 relative scrim-t bg-cover bg-center"
         :style="{ backgroundImage: `url('${ project.cover }')` }">
      <h4 class="text-white font-normal text-xs md:text-sm uppercase opacity-80 tracking-widest mb-2">
        {{ project.title }}
      </h4>
      <h2 class="pr-12 leading-none text-4xl">
        {{ project.subtitle }}
      </h2>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["project", "url"]
}
</script>

