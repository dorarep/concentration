<template lang="pug">
  section.container
    b-modal(centered ref="informationModal" ok-only @ok="onOk")
      p {{ `STAGE ${stageId}` }}
      p {{ `TIME: ${stage.timer} sec` }}
    game-screen
</template>

<script>
  import GameScreen from '~/components/organisms/GameScreen.vue'
  import STAGES from '~/constants/stages'

  export default {
    components: {
      GameScreen
    },
    mounted () {
      this.$refs.informationModal.show()
      this.$store.dispatch('game/initialize', this.$route.params.id)
    },
    computed: {
      stageId () {
        return parseInt(this.$route.params.id) + 1
      },
      stage () {
        return STAGES[this.$route.params.id]
      }
    },
    methods: {
      onOk () {
        this.$store.dispatch('game/startTimer')
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

