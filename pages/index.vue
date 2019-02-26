<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Henry Holmes
      </h1>
      <h2 class="subtitle">
        Henry is a designer in Brooklyn.
      </h2>
    </div>
    <ProjectCard />
  </section>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue'

export default {
  components: {
    ProjectCard
  }
}
</script>
