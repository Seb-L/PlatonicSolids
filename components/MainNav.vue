<template>
  <div>
    <header
      class="text-center my-12 flex justify-center items-center max-w-lg mx-auto"
    >
      <div class="md:mr-4 w-48">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQEnZQHT6lWTag/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=4Pc1u2Kz9UjICGAhcmjg1243-Pepkbtqjxp2UpKYSks"
          alt
          class="rounded-full mx-auto my-4 w-32 h-32"
        />
      </div>

      <div class="text-left md:ml-4">
        <div class="text-3xl font-bold text-gray-800 leading-none">Seb.L</div>
        <div class="italic mb-4">
          <span class="text-xs">
            [He/Him/His]
          </span>
          <br />
          Lead Front-End Developer, vinyl record collector, veggie food & tattoo
          lover.
        </div>

        <nav class="text-sm flex">
          FIND ME ON:
          <ul class="flex ml-4">
            <li class="mr-4">
              <a
                href="https://www.linkedin.com/in/sebastienlombard/"
                target="_blank"
              >
                <LinkedinIcon size="1.25x" />
              </a>
            </li>
            <li class="mr-4">
              <a href="https://github.com/Seb-L" target="_blank">
                <github-icon size="1.25x" />
              </a>
            </li>
            <li class="mr-4">
              <a href="https://twitter.com/Seb_L_" target="_blank">
                <twitter-icon size="1.25x" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <nav class="text-center text-gray-800 font-bold text-xl mb-4">
      <ul class="flex justify-center items-center">
        <li class="mx-4">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="mx-4">
          <nuxt-link to="/whoami">Who am I?</nuxt-link>
        </li>
        <li class="mx-4">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>

    <hr class="w-64 mx-auto" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'vue-feather-icons'

export default defineComponent({
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
  },
  setup() {},
})
</script>
