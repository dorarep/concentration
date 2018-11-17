<template lang="pug">
  section.container
    .logo
      logo
    .menu
      nuxt-link(to="/stages") ▶ select
</template>

<script>
  import TopMenu from '~/components/atoms/TopMenu.vue'
  import Logo from '~/components/atoms/Logo.vue'

export default {
  components: {
    TopMenu,
    Logo
  },
  mounted () {
    this.$store.dispatch('game/stageSelect')
  }
}
</script>

<style>
  .container {
    min-height: 100vh;
    background-color: #89c5ca;
  }
  .logo {
    position: fixed;
    top: 30%;
    left: 50%;
    margin-left: -75px;
    transform: translate(-50%, -50%);
  }
  .menu {
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
  }
</style>

