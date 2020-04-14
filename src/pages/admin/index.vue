<template>
  <AdminPage>
    <template v-slot:pageHeader>
      <h1 class="text-2xl">
        Posts
      </h1>

      <div class="flex ml-auto">
        <input
          id="search"
          v-model="searchTerms"
          type="text"
          name="search"
          class="w-64 px-2 border border-gray-200 rounded-l focus:outline-none focus:border-blue-500"
        >
        <DropdownMenu
          icon="filter"
          button-classes="!rounded-l-none"
        >
          sdcfkjsdlkf
        </DropdownMenu>
      </div>
    </template>

    <ul>
      <li
        v-for="post in posts"
        :key="post.attributes.title"
        class="post-item flex flex-row items-center"
      >
        <div class="flex-1">
          <h2 class="text-xl font-bold">
            {{ post.attributes.title }}
          </h2>
          <div>Published: {{ post.attributes.publishedDate }}</div>
          <div>
            <ul class="flex">
              <li
                v-for="tag in post.attributes.tags"
                :key="tag"
                class="mr-1"
              >
                #{{ tag }}
              </li>
            </ul>
          </div>
        </div>

        <DropdownMenu
          :menu-items="[
            { icon: 'pencil-alt', label: 'Edit post', to: { name: 'admin-post-edit-slug', params: { slug: post.fileName }} },
            { icon: 'trash-alt', label: 'Delete post', click: () => {} },
            { icon: 'eye', label: 'View post', to: { name: 'blog-slug', params: { slug: post.fileName }} },
          ]"
          class="ml-4"
        />
      </li>
    </ul>
  </AdminPage>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import AdminPage from '@/components/admin/Page.vue'
import DropdownMenu from '@/components/admin/DropdownMenu.vue'
// import usePosts from '@/composables/use-posts'

export default defineComponent({
  name: 'AdminPosts',
  layout: 'admin',
  components: {
    AdminPage,
    DropdownMenu,
  },
  // asyncData () {
  //   const resolve = require.context('@/content/', true, /\.md$/)
  //   const imports = resolve.keys().map((key) => {
  //     const [, name] = key.match(/\/(.+)\.md$/)

  //     const content = resolve(key)
  //     content.fileName = name
  //       .replace('.md', '')
  //       .split('/')
  //       .pop()

  //     return content
  //   })

  //   return {
  //     posts: imports,
  //   }
  // },
  setup () {
    // const { getAllPosts, posts } = usePosts()

    // const state = reactive({
    //   searchTerms: '',
    //   // posts: [],
    // })

    // getAllPosts()

    // return {
    //   ...toRefs(state),
    //   posts,
    // }
  },
})
</script>

<style lang="scss" scoped>
.post-item{
  @apply py-4 text-sm border-b border-gray-200;
}
</style>
