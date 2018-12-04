<template lang="pug">
  stage
</template>

<script>
  import Stage from '~/components/templates/Stage.vue'

  export default {
    components: {
      Stage
    },
    mounted () {
      document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
    }
  }
</script>
