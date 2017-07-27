<template>
  <div class="">
    <Intro></Intro>
    <Expe></Expe>
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Expe from './Expe.vue'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    Intro,
    Expe
  }
}
</script>

<style scoped>

</style>
