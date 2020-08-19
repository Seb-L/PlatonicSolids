<template>
  <div class="prose prose-xs sm:prose lg:prose-lg xl:prose-lg mx-auto py-12">
    <h1>Contact</h1>

    <form name="contact" action method="post" @submit.prevent="onSubmit">
      <div class="mb-4">
        <label class="form-label" for="name">Name:</label>
        <input id="name" v-model="form.name" class="form-field" name="name" reauired />
      </div>

      <div class="mb-4">
        <label class="form-label" for="email">Email:</label>
        <input id="email" v-model="form.email" class="form-field" name="email" reauired />
      </div>

      <div class="mb-4">
        <label class="form-label" for="message">Message:</label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-field"
          name="message"
          rows="10"
          reauired
        ></textarea>
      </div>

      <input class="form-button" type="submit" value="Send message" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup(_props) {
    const state = reactive({
      form: {
        name: '',
        email: '',
        message: '',
      },
    })

    const onSubmit = () => {
      const url = 'https://getform.io/f/cfa6d958-528b-4342-b5ad-2103f2014e11'

      axios.post(url, state.form, {
        headers: { Accept: 'application/json' },
      })
    }

    return {
      ...toRefs(state),
      onSubmit,
    }
  },
})
</script>

<style lang="scss" scoped>
.form-label {
  @apply block text-sm text-gray-600;
}
.form-field {
  @apply border w-full;
}
.form-button {
  @apply px-8 py-2 cursor-pointer;
}
</style>
