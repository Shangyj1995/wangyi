<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    FooterGuide,
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>
