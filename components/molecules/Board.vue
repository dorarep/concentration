<template lang="pug">
  .table
    .tr(v-for="(row, y) in $store.state.game.board" :key="y")
      .td(v-for="(cell, x) in row" :key="x" )
        card(:num="$store.state.game.board[y][x]" :size="size" :isOpen="$store.getters['game/isGameStateLearning'] || $store.state.game.isOpen[y][x]" @click.native="$store.dispatch('game/onClick', {y, x})")
</template>

<script>
  import Card from '~/components/atoms/Card.vue'

  export default {
    components: {
      Card
    },
    computed: {
      size () {
        const width = window.parent.screen.width
        const y = this.$store.state.game.board.length
        const x = this.$store.state.game.board[0].length

        if (width > x * 110) {
          return 'l'
        } else if (width > x * 70) {
          return 'm'
        } else {
          return 's'
        }
      }
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
