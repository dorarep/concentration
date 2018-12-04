<template lang="pug">
  .number-card.wrapper(v-if="isOpen") {{ num }}
  img.wrapper(v-else src="~/assets/images/close.png")
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
    margin: 10px;
  }
  .number-card {
    width: 100px;
    height: 100px;
    background-color: #ffd310;
    border: 0;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #89c5ca;
  }
</style>
