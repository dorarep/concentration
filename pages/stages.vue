<template lang="pug">
  section.container
    nuxt-link(v-for="(stage, id) in stages" :to="`/stage/${id}`")
      stage(:id="id + 1")
</template>

<script>
import GameScreen from '~/components/organisms/GameScreen.vue'
import Stage from '~/components/atoms/Stage.vue'
import STAGES from '~/constants/stages.js'

export default {
  components: {
    GameScreen,
    Stage
  },
  computed: {
    stages () {
      return STAGES
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #89c5ca;
}
</style>

