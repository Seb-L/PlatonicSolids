import Vue from 'vue'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $auth: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $auth?: any
  }
}
