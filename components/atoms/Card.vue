<template lang="pug">
  .flip-container.wrapper(:class="{ 'is-close': !isOpen, m: size === 'm', l: size === 'l', s: size === 's' }")
    .flipper
      .front
        .number-card(:class="size") {{ num }}
      .back
        img(:class="size" src="~/assets/images/close.png")
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'l'
      },
      num: {
        type: Number
      },
      isOpen: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  .s {
    width: 35px;
    height: 35px;
    line-height: 35px;
  }

  .m {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  .l {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }

  .wrapper {
    margin: 5px;
  }
  .number-card {
    background-color: #ffd310;
    border: 0;
    text-align: center;
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
    transition: 0.3s;
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
