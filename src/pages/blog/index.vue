<template>
  <div class="container">
    <h1 class="text-2xl">
      Posts
    </h1>

    <div class="flex ml-auto mb-4">
      <input
        id="search"
        v-model="searchTerms"
        type="text"
        name="search"
        class="w-64 px-2 border border-gray-200 rounded-l focus:outline-none focus:border-blue-500"
        @input="searchForPosts"
      >
      <DropdownMenu
        icon="filter"
        button-classes="!rounded-l-none"
      >
        sdcfkjsdlkf
      </DropdownMenu>
    </div>

    <ul class="flex -mx-2">
      <li
        v-for="post in posts"
        :key="post.title"
        class="post-item-wrapper"
      >
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }" class="post-item">
          <div class="post-item-details">
            <h2 class="text-xl font-bold">
              {{ post.title }}
            </h2>

            <div class="italic font-thin text-xs">
              Published: {{ post.publishedDate }}
            </div>

            <ul class="tags">
              <li
                v-for="tag in post.tags"
                :key="tag"
              >
                <nuxt-link :to="{ name: 'blog-tag', params: { tag: tag } }" class="tag">
                  #{{ tag }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'
import { Context } from '@nuxt/types'
import { Result } from '@nuxt/content'
import AdminPage from '@/components/admin/Page.vue'
import DropdownMenu from '@/components/admin/DropdownMenu.vue'

interface State {
  searchTerms: string
  posts: Result | Result[]
}

export default defineComponent({
  name: 'AdminPosts',
  layout: 'admin',
  components: {
    AdminPage,
    DropdownMenu,
  },
  async asyncData (ctx: Context) {
    return {
      posts: await ctx.$content()
        .where({ isPublished: true })
        .fetch(),
    }
  },
  setup (props, ctx) {
    const state = reactive<State>({
      searchTerms: '',
      posts: [],
    })

    const searchForPosts = async () => {
      state.posts = await ctx.root.$content()
        .search('title', state.searchTerms)
        .fetch()
    }

    return {
      ...toRefs(state),
      searchForPosts,
    }
  },
})
</script>

<style lang="scss" scoped>
.post-item-wrapper{
  @apply text-sm flex flex-col w-1/3 px-2;

  .post-item{
    @apply bg-gray-200 w-full h-64 flex flex-col cursor-pointer bg-cover overflow-hidden;
    background-image: url(https://placeimg.com/640/480/any);

    .post-item-details{
      @apply h-full mt-auto bottom-0 left-0 right-0 px-4 py-2 flex flex-col justify-center items-center text-white;
      background: rgba(black, 0.5);
      transition: all 0.4s;

      &:hover{
        transform: scale(1.1);
        background: rgba(black, 0.8);
      }

      .tags{
        @apply flex flex-row;

        .tag{
          @apply mx-1 px-2 rounded bg-gray-200 text-gray-800 text-xs uppercase;
        }
      }
    }
  }
}
</style>
