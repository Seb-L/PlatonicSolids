import { reactive, toRefs } from 'nuxt-composition-api'
import { Post } from '@/types/Post'

interface State {
  posts: Post[]
}

const state = reactive<State>({
  posts: [],
})

export default () => {
  const getAllPosts = () => {
    const resolve = require.context('@/content/', true, /\.md$/)

    state.posts = resolve.keys().map((key) => {
      const content = resolve(key)
      const match = key.match(/\/(.+)\.md$/)

      if (match) {
        content.slug = match[1]
          .replace('.md', '')
          .split('/')
          .pop()
      }
      return content
    })

    return state.posts
  }

  return {
    ...toRefs(state),
    getAllPosts,
  }
}
