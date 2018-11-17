<template lang="pug">
  .wrapper {{ num + isOpen }}
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
    border: medium solid #ff00ff;
  }
</style>
