<template>
  <div id="menu-container">
    <button
      :class="{
        'w-8 h-8': !$slots.button,
        [buttonClasses]: buttonClasses
      }"
      class="admin-btn"
      @click="isMenuOpened = !isMenuOpened"
    >
      <slot
        :isMenuOpened="isMenuOpened"
        name="button"
      >
        <fa :icon="isMenuOpened ? 'times' : icon" />
      </slot>
    </button>

    <transition name="admin-menu">
      <div
        v-if="isMenuOpened"
        id="menu"
        :class="`${position} ${refMappingTriangles[position]} ${menuClasses}`"
      >
        <slot>
          <template v-for="item in menuItems">
            <nuxt-link
              v-if="item.to"
              :key="item.label"
              :to="item.to"
              tag="button"
              class="admin-menu-button"
            >
              <fa :icon="item.icon" class="mr-1" />
              {{ item.label }}
            </nuxt-link>

            <button
              v-if="item.click"
              :key="item.label"
              class="admin-menu-button"
              @click="item.click"
            >
              <fa :icon="item.icon" class="mr-1" />
              {{ item.label }}
            </button>
          </template>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'

interface MenuItemLink {
  icon: string
  label: string
  to: object
}

interface MenuItemClick {
  icon: string
  label: string
  click: Function
}

interface Props {
  position: string
  icon: string
  buttonClasses: string
  menuClasses: string
  menuItems: (MenuItemClick | MenuItemLink)[]
}

interface State {
  isMenuOpened: boolean
  refMappingTriangles: object
}

export default defineComponent<Props>({
  name: 'AdminMenu',
  props: {
    position: {
      default: 'bottom-right',
    },
    icon: {
      default: 'bars',
    },
    buttonClasses: {
      default: '',
    },
    menuClasses: {
      default: '',
    },
    menuItems: {
      default: () => [],
    },
  },
  setup (props, ctx) {
    const state = reactive<State>({
      isMenuOpened: false,
      refMappingTriangles: {
        'bottom-right': 'triangle-top-right',
        'bottom-left': 'triangle-top-left',
      },
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
#menu-container{
  @apply z-40 relative;
}
#menu{
  @apply bg-gray-200 rounded absolute py-1 px-2 text-sm w-48;

  &.bottom-right,
  &.bottom-left{
    @apply top-0 mt-12;
  }
  &.bottom-right{
    @apply right-0;
  }
  &.bottom-left{
    @apply left-0;
  }
}
.admin-menu-button{
  @apply px-2 py-1 w-full text-left border-b outline-none;

  &:focus{
    @apply outline-none;
  }

  &:last-child{
    @apply border-b-0;
  }

  &.nuxt-link-exact-active{
    @apply text-gray-500 cursor-default;
  }
}
</style>
