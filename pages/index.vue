<template lang="pug">
  section.container
    game-screen
</template>

<script>
import GameScreen from '~/components/organisms/GameScreen.vue'

export default {
  components: {
    GameScreen
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
  background-color: black;
}
</style>

