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

    <div class="flex flex-col">
      <h2 class="text-2xl mb-2">
        Title
      </h2>
      <input
        v-model="meta.title"
        type="text"
        class="border rounded w-full py-2 px-4 mb-4"
      >

      <h2 class="text-2xl mb-2">
        Body
      </h2>
      <VueSimplemde
        v-model="body"
        :highlight="true"
      />
    </div>
  </AdminPage>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'
import VueSimplemde from 'vue-simplemde'
import { Context } from '@nuxt/types'
import AdminPage from '@/components/admin/Page.vue'
import DropdownMenu from '@/components/admin/DropdownMenu.vue'

export default defineComponent({
  name: 'AdminPostEdit',
  layout: 'admin',
  components: {
    AdminPage,
    DropdownMenu,
    VueSimplemde,
  },
  async asyncData ({ params }: Context) {
    // if (!params.slug) return

    // try {
    //   const post = await import(`@/content/${params.slug}.md`)

    //   return {
    //     meta: post.attributes,
    //     body: post.body,
    //     singlePostComponent: post.vue.component,
    //   }
    // } catch (err) {
    //   return false
    // }
  },
  setup (props, ctx) {
    const state = reactive({
    })

    const client = ctx.root.$apollo
    console.log(client) // eslint-disable-line

    return {
      ...toRefs(state),
    }
  },
})
</script>
