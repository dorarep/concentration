<template lang="pug">
  section.container
    .logo
      logo
    .menu
      nuxt-link(to="/stages")
        top-menu
          div SELECT
</template>

<script>
  import TopMenu from '~/components/atoms/TopMenu.vue'
  import Logo from '~/components/atoms/Logo.vue'

export default {
  components: {
    TopMenu,
    Logo
  }
}
</script>

<style>
  .container {
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #89c5ca;
  }
  .logo {
    padding-top: 20%;
  }
  .menu {
    position: fixed; /* or absolute */
    top: 70%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
  }
</style>

