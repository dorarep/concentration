<template lang="pug">
  stages
</template>

<script>
import Stages from '~/components/templates/Stages.vue'

export default {
  layout: 'list',
  components: {
    Stages
  },
  mounted () {
    document.body.removeEventListener('touchmove', (e) => e.preventDefault(), { passive: false })
  }
}
</script>
