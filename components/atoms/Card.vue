<template lang="pug">
  .flip-container.wrapper(:class="{ 'is-close': !isOpen }")
    .flipper
      .front
        .number-card {{ num }}
      .back
        img(src="~/assets/images/close.png")
</template>

<script>
  export default {
    props: ['num', 'isOpen']
  }
</script>

<style scoped>
  img {
    width: 100px;
    height: 100px;
  }

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
  .flip-container {
    perspective: 1000px;
  }
  .is-close .flipper {
    transform: rotateY(180deg);
  }
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;

    position: relative;
  }
  .front, .back {
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    transform: rotateY(0deg);
  }
  .back {
    transform: rotateY(180deg);
  }
</style>
