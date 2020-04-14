<template>
  <div v-if="author" class="author-card">
    <div
      :style="{ 'background-image': `url(/blog/authors/${author.avatar})`}"
      class="avatar"
    >
      &nbsp;
    </div>

    <div class="author-infos">
      <div class="author-name">
        {{ author.name }}
      </div>

      <p>{{ author.description }}</p>

      <div
        v-if="author.social"
        class="author-social"
      >
        Find me on:

        <ul>
          <li v-if="author.social.twitter">
            <a href="author.social.twitter" target="_blank">
              <fa :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li v-if="author.social.linkedin">
            <a href="author.social.linkedin" target="_blank">
              <fa :icon="['fab', 'linkedin']" />
            </a>
          </li>
          <li v-if="author.social.github">
            <a href="author.social.github" target="_blank">
              <fa :icon="['fab', 'github']" />
            </a>
          </li>
          <li v-if="author.social.instagram">
            <a href="author.social.instagram" target="_blank">
              <fa :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li v-if="author.social.website">
            <a href="author.social.website" target="_blank">
              <fa icon="globe" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'nuxt-composition-api'
import { Author } from '@/types/Author'
import useAuthors from '@/composables/use-authors'

interface Props {
  authorName: string
}

export default defineComponent<Props>({
  props: {
    authorName: {
      required: true,
      default: '',
    },
  },
  setup (props, ctx) {
    const { getAuthor } = useAuthors()
    const author = computed<Author | undefined>(() => getAuthor(props.authorName))

    return {
      author,
    }
  },
})
</script>

<style lang="scss" scoped>
.author-card{
  @apply border rounded p-4 flex text-xs items-center;

  .avatar{
    @apply rounded-full w-16 h-16 bg-center bg-cover mr-4;
  }
  .author-infos{
    @apply flex-1;

    .author-name{
      @apply font-bold;
    }
    .author-social{
      @apply flex text-gray-600 mt-2;

      ul{
        @apply flex ml-1;

        li{
          @apply flex-1 mx-1;

          a:hover{
            @apply text-gray-800;
          }
        }
      }
    }
  }
}
</style>
