<template>
  <div id="intro">
    <div id="avatar">
      &nbsp;
    </div>

    <div class="intro-wrapper">
      <div class="intro-container">
        <h1 class="text-3xl font-medium leading-none">
          Sébastien Lombard
        </h1>
        <div class="italic font-light">
          Lead Front-End Developer
        </div>
      </div>

      <ul class="social">
        <li
          v-for="socialLink in socialLinks"
          :key="socialLink.link"
          class="mx-2"
        >
          <a :href="socialLink.link" target="_blank">
            <fa :icon="['fab', socialLink.icon]" />
          </a>
        </li>
      </ul>

      <fa
        icon="angle-down"
        size="lg"
        class="mx-auto mt-10 text-gray-600"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'

interface SocialLink {
  icon: string;
  link: string;
}

interface State {
  socialLinks: SocialLink[];
}

export default defineComponent({
  name: 'Intro',
  setup () {
    const state = reactive<State>({
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Seb-L' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/sebastienlombard/' },
        { icon: 'medium', link: 'https://medium.com/@Seb_L' },
      ],
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
#intro{
  @apply flex flex-col bg-gray-200 justify-center items-center;
  height: 90vh;

  #avatar{
    @apply relative mx-auto mt-auto rounded-full;
    width: 300px;
    height: 300px;
    background: white;
    background-image: url(../static/avatar.jpg);
    background-size: cover;
    background-position: center;
  }

  .intro-wrapper{
    @apply relative w-full flex flex-col;
    height: 220px;
    background: linear-gradient(-7deg, white 50%, transparent 50.01%);
    padding-top: 75px;
  }
  .intro-container{
    @apply bg-gray-800 text-white py-3 px-12 text-center inline-block ml-auto mr-auto mb-2;
  }
  .social{
    @apply flex flex-row text-gray-600 justify-center;
    bottom: -30px;
    left: 0;
    right: 0;
  }
}
</style>
