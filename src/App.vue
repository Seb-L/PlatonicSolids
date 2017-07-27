<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body{
  height: 100%;
}
body{
  font-size: 18px !important;
}
.section{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
