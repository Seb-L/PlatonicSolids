<template>
  <div class="flex flex-col flex-1 items-center justify-center">
    <h1 class="text-4xl mb-8">
      Login
    </h1>

    <button
      class="admin-btn flex flex-row items-center py-2 px-4 text-lg"
      @click="$auth.loginWith('github')"
    >
      <fa :icon="['fab', 'github']" class="mr-2" />
      with Github
    </button>
  </div>
</template>
