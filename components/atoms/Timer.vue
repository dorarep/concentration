<template lang="pug">
  .timer {{ $store.state.game.timer }}
</template>

<script>
  export default {
    props: [ 'num', 'isOpen' ]
  }
</script>

<style scoped>
  .timer {
    color: white;
  }
</style>
