<template lang="pug">
  .table
    .tr(v-for="(row, y) in $store.state.game.board" :key="y")
      .td(v-for="(cell, x) in row" :key="x" )
        card(:num="$store.state.game.board[y][x]" :isOpen="$store.state.game.isOpen[y][x]" @click.native="$store.dispatch('game/onClick', {y, x})")
</template>

<script>
  import Card from '~/components/atoms/Card.vue'

  export default {
    components: {
      Card
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
