<template lang="pug">
  game-title
</template>

<script>
  import GameTitle from '~/components/templates/GameTitle.vue'

  export default {
    components: {
      GameTitle
    },
    mounted () {
      document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
    }
  }
</script>
