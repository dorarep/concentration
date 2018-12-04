<template lang="pug">
  div
    timer
    board
    button(@click="$store.dispatch('game/finishLearning')" v-if="$store.getters['game/isGameStateLearning']") 開始
</template>

<script>
  import Timer from '~/components/atoms/Timer.vue'
  import Board from '~/components/molecules/Board.vue'

  export default {
    components: {
      Board,
      Timer
    }
  }
</script>

<style scoped>
  .table {
    display: table;
    line-height: 0;
  }
  .tr {
    display: table-row;
  }
  .td {
    display: table-cell;
  }
</style>
