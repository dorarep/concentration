<template lang="pug">
  .wrapper
    div(v-if="isOpen") {{ num }}
    div(v-else) 裏
</template>

<script>
  export default {
    props: [ 'num', 'isOpen' ]
  }
</script>

<style scoped>
  .wrapper {
    width: 100px;
    height: 100px;
    background-color: white;
    text-align: center;
    line-height: 100px;
    border: medium solid black;
    font-size: 30px;
  }
</style>
