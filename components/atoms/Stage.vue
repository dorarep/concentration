<template lang="pug">
  .wrapper(:class="{clear}") {{ id }}
</template>

<script>
  export default {
    props: ['id', 'clear']
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 45px;
    background-color: #ffd310;
    color: #89c5ca;
    margin-bottom: 5px;
  }
  .clear {
    background-color: gray;
  }
</style>
