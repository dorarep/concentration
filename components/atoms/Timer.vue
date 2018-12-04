<template lang="pug">
  div
    .timer {{ $store.state.game.timer }}
    p.timer score: {{ $store.state.game.score }}
</template>

<script>
  export default {
    props: [ 'num', 'isOpen' ]
  }
</script>

<style scoped>
  .timer {
    color: white;
    font-size: 30px;
  }
</style>
