<template lang="pug">
  section#stages-container
    .title STAGE
    .b-container
      b-row(v-for="(stageRow, i) in stages")
        b-col(v-for="(stage, j) in stageRow")
          nuxt-link(:to="`/stage/${i * 4 + j}`")
            stage(:id="i * 4 + j + 1", :clear="$store.state.user.cleared[i * 4 + j]")
</template>

<script>
  import GameScreen from '~/components/organisms/GameScreen.vue'
  import Stage from '~/components/atoms/Stage.vue'
  import STAGES from '~/constants/stages.js'

  export default {
    layout: 'list',
    components: {
      GameScreen,
      Stage
    },
    computed: {
      stages () {
        return STAGES.reduce((table, item) => {
          const last = table[table.length - 1];
          if (last.length === 4) {
            table.push([item]);
            return table;
          }
          last.push(item);
          return table;
        }, [[]]);
      }
    },
    mounted () {
      this.$store.dispatch('game/stageSelect')
    }
  }
</script>

<style>
  #stages-container {
    overflow-y: scroll;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #89c5ca;
    display: block;
  }

  .title {
    font-size: 50px;
    padding-top: 30px;
    margin-bottom: 30px;
    color: white;
  }
</style>

