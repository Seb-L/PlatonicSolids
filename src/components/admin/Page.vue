<template>
  <div class="admin-page">
    <div class="admin-page-header">
      <DropdownMenu
        :menu-items="menuItems"
        position="bottom-left"
      />

      <div class="flex-1 flex flex-row items-center pl-3">
        <slot name="pageHeader" />
      </div>
    </div>

    <div class="admin-page-content">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'nuxt-composition-api'
import DropdownMenu from '@/components/admin/DropdownMenu.vue'

export default defineComponent({
  name: 'AdminPage',
  components: {
    DropdownMenu,
  },
  setup (props, ctx) {
    const state = reactive({
      menuItems: [
        { icon: 'pencil-alt', label: 'New Post', to: { name: 'admin-post-new' } },
        { icon: 'archive', label: 'Posts', to: { name: 'admin' } },
        // @ts-ignore
        { icon: 'sign-out-alt', label: 'Logout', click: () => ctx.root.$auth.logout('github') },
      ],
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="scss" scoped>
.admin-page {
  @apply flex flex-col h-screen;
}
.admin-page-header{
  @apply flex flex-row items-center px-3 py-2 bg-gray-100;
}
.admin-page-content{
  @apply flex-1 overflow-auto py-6;
}
</style>
