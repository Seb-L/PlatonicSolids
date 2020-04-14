<template>
  <div class="blog-post container">
    <header class="post-title">
      <img :src="post.cover" class="mx-auto mb-8">

      <h1 class="text-center">
        {{ post.title }}
      </h1>
      <hr>
      <div class="text-sm flex mb-2">
        <div class="flex-1 text-right px-4 border-r">
          <fa icon="stopwatch" class="mr-1" /> {{ post.readingTime.text }}
        </div>
        <div class="flex-1 text-left px-4">
          <fa icon="calendar-alt" class="mr-1" /> {{ formatDate(post.publishedDate) }}
        </div>
      </div>

      <ul class="tag-list">
        <li
          v-for="tag in post.tags"
          :key="tag"
        >
          <nuxt-link :to="{ name: 'blog-tag', params: { tag: tag } }">
            #{{ tag }}
          </nuxt-link>
        </li>
      </ul>
    </header>

    <nuxt-content :document="post" />

    <footer class="max-w-2xl mx-auto flex border-t pt-4 mt-6">
      <!-- Author -->
      <div class="flex-3 mr-4">
        <h4 class="mb-2">
          Author
        </h4>
        <AuthorCard :author-name="post.author" />
      </div>

      <!-- Share -->
      <div class="flex-2">
        <h4 class="mb-2">
          Share this post on
        </h4>

        <ul class="flex items-center justify-center">
          <li>LN</li>
          <li>TW</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import { Context } from '@nuxt/types'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

export default defineComponent({
  async asyncData (ctx: Context) {
    const post: any = await ctx.$content(ctx.params.slug).fetch()

    if (ctx.app.head) {
      ctx.app.head.title = post.title
      ctx.app.head.meta = [
        ...ctx.app.head.meta.filter((item: any) => item.hid !== 'description'),
        { hid: 'description', name: 'description', content: post.description },
      ]
    }

    return {
      post,
    }
  },
  setup (props, ctx) {
    const formatDate = (dateString: string) => dayjs(dateString).format('LL')

    return {
      formatDate,
    }
  },
})
</script>

<style lang="scss" scoped>
.blog-post{
  @apply pb-12 bg-white;

  .post-title{
    @apply my-24 text-center;

    h1{
      @apply my-2 text-4xl leading-none;
    }
    hr{
      @apply border-t-4 mx-auto border-gray-800 my-4;
      width: 2rem;
    }
    .tag-list{
      @apply text-gray-500 flex mx-auto items-center justify-center uppercase text-xs;

      li{
        @apply mx-1;
      }
    }
  }
}
</style>
