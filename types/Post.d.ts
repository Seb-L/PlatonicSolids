import { Result } from '@nuxt/content'

export interface Post extends Result {
  title: string
  coverImg: string
  description: string
  draft?: boolean
}
