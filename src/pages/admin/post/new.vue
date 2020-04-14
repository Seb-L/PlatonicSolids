<template>
  <AdminPage>
    <template v-slot:pageHeader>
      <h1 class="text-2xl">
        New Post
      </h1>

      <div class="flex ml-auto text-sm uppercase">
        <button class="admin-btn py-1 px-4 h-8 mr-2">
          <fa icon="save" class="mr-1" />
          Save
        </button>

        <button class="admin-btn py-1 px-4 h-8">
          <fa icon="upload" class="mr-1" />
          Publish
        </button>
      </div>
    </template>

    sdfdsdf
  </AdminPage>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'
import AdminPage from '@/components/admin/Page.vue'
import DropdownMenu from '@/components/admin/DropdownMenu.vue'

export default defineComponent({
  name: 'AdminPostNew',
  layout: 'admin',
  components: {
    AdminPage,
    DropdownMenu,
  },
  setup () {
    const state = reactive({
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
