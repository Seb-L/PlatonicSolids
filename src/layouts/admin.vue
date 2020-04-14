<template>
  <div class="flex flex-col flex-1">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

export default defineComponent({
  middleware: 'auth',
})
</script>
