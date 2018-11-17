<template lang="pug">
  board
</template>

<script>
  import Board from '~/components/molecules/Board.vue'

  export default {
    components: {
      Board
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
