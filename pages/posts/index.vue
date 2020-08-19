<template>
  <div class="prose prose-xs sm:prose lg:prose-lg xl:prose-lg mx-auto py-12">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/posts/${post.slug}`">
          <img :src="post.coverImg" :alt="post.title" />
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStatic, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_props) {
    // @ts-ignore
    const { $content, params } = useContext()
    const posts = useStatic(
      () => {
        const filters = {
          draft: { $ne: true },
        }

        if (params.value.tag) {
          filters.tags = { $contains: params.value.tag }
        }

        return $content()
          .where(filters)
          .only(['title', 'slug', 'coverImg'])
          .fetch()
      },
      undefined,
      'posts',
    )

    return { posts }
  },
})
</script>
