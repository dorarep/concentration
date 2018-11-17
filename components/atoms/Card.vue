<template lang="pug">
  div(v-if="isOpen")
    .wrapper
      .card {{ num }}
  div(v-else)
    img.wrapper(src="~/assets/images/close.png")
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
  .card {
    width: 100%;
    height: 100%;
    background-color: white;
    text-align: center;
    line-height: 100px;
    border: medium solid black;
    font-size: 30px;
    color: #519dad;
  }
</style>
