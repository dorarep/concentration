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
    width: 100px;
    height: 100px;
    background-color: white;
    text-align: center;
    line-height: 100px;
    border: medium solid black;
    font-size: 30px;
    color: #519dad;
    margin: 10px;
  }
</style>
