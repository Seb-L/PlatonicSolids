<template>
  <article v-if="post" class="py-12">
    <header class="max-w-3xl mx-auto">
      <img :src="post.coverImg" :alt="post.title" />
      <h1
        class="font-bold text-center leading-none mt-8 mb-2 text-4xl text-gray-800"
      >{{ post.title }}</h1>

      <ul class="flex justify-center">
        <li v-for="tag in post.tags" :key="tag" class="uppercase text-sm px-1 mb-8">
          <nuxt-link :to="{ name: 'tags-tag', params: { tag: tag } }">#{{ tag }}</nuxt-link>
        </li>
      </ul>
    </header>

    <div class="prose prose-xs sm:prose lg:prose-lg xl:prose-lg mx-auto">
      <div v-if="post.showToc">
        <h2>Table of content</h2>

        <ul>
          <li
            v-for="link of post.toc"
            :key="link.id"
            :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
          >
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>

        <hr />
      </div>

      <NuxtContent :document="post" />
    </div>
  </article>
</template>

<script lang="ts">
import {
  defineComponent,
  useStatic,
  computed,
  useContext,
  useMeta,
} from '@nuxtjs/composition-api'
import { Post } from '@/types/Post'

export default defineComponent({
  head: {},
  setup(_props) {
    const { params, $content, route } = useContext()
    const slug = computed(() => params.value.slug)
    const post = useStatic<Post>((slug) => $content(slug).fetch(), slug, 'post')

    useMeta({
      title: post.value?.title,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: post.value?.draft ? 'noindex, nofollow' : 'index, follow',
        },
        {
          hid: 'description',
          name: 'description',
          content: post.value?.description || '',
        },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:title', name: 'og:title', content: post.value?.title || '' },
        {
          hid: 'og:description',
          name: 'og:description',
          content: post.value?.description || '',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: post.value?.coverImg || '',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${process.env.siteUrl}${route.value.path}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: post.value?.title || '',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: post.value?.description || '',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: post.value?.coverImg || '',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${process.env.siteUrl}${route.value.path}`,
        },
      ],
    })

    return { post }
  },
})
</script>
