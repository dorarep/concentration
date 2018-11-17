<template lang="pug">
  section.container
    b-modal(centered ref="informationModal" ok-only @ok="onInformationOk")
      p {{ `STAGE ${stageId}` }}
      p {{ `TIME: ${stage.timer} sec` }}
    b-modal(centered ref="finishModal" ok-only @ok="onFinishOk")
      p FINISH
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
      onInformationOk () {
        this.$store.dispatch('game/startTimer', setInterval(() => {
          this.$store.commit('game/reduceTimer')

          this.checkFinish()
        }, 1000))
      },
      checkFinish () {
        console.log(this.$store.state)
        if (this.$store.state.game.timer === 0) {
          this.$refs.finishModal.show()
        }
      },
      onFinishOk () {
        this.$router.push('/stages')
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
  .modal-content {
    background-color: #89c5ca;
    font-size: 30px;
    color: white;
  }
</style>

