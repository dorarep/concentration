<template lang="pug">
  section.container
    b-modal(centered ref="informationModal" no-close-on-backdrop ok-only @hide="onInformationOk")
      p {{ `STAGE ${stageId}` }}
      p {{ `TIME: ${stage.timer} sec` }}
      p {{ `CLEAR: over ${stage.score} score` }}
    b-modal(centered ref="finishModal" no-close-on-backdrop ok-only @hide="onFinishOk")
      p FINISH
      p {{ `CLEAR: over ${stage.score} score` }}
      p {{ `Your score: ${$store.state.game.score}` }}
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
        this.$store.dispatch('game/setTimer', setInterval(() => {
          this.$store.commit('game/reduceTimer')

          this.checkFinish()
        }, 1000))
      },
      checkFinish () {
        if (this.$store.state.game.timer === 0) {
          this.$refs.finishModal.show()
          this.$store.dispatch('game/setTimer', null)
        }
      },
      onFinishOk () {
        if (this.$store.state.game.score >= STAGES[this.$route.params.id].score) {
          this.$store.commit('user/clear', this.$route.params.id)
        }
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

