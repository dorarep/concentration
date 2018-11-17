<template lang="pug">
  .wrapper {{ id }}
</template>

<script>
  export default {
    props: [ 'id' ]
  }
</script>

<style scoped>
  .wrapper {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 45px;
    background-color: #ffd310;
    color: #89c5ca;
    margin-bottom: 5px;
  }
</style>
