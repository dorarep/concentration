<template lang="pug">
  .wrapper
    slot
</template>

<style scoped>
  .wrapper {
    width: 150px;
    height: 50px;
    background-color: white;
    text-align: center;
    line-height: 50px;
    border: medium solid black;
    font-size: 30px;
    color: #519dad;
    margin: 10px;
  }
</style>
