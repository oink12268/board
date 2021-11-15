<template>
  <div id="app">
    <left></left>
    <router-view class="sub-web-view"/>
  </div>
</template>

<script>
  import Registration from './components/Registration'
  import Left from './components/inc/Left'
  import Main from './components/Main'
  export default {
    name: 'App',
    components: {Registration, Main, Left},
    mounted () {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .sub-web-view {
    position: fixed !important;
    top: 0 !important;
    z-index: 10 !important;
    height: 100vh;
    margin-top: 100px;
    margin-left: 400px;
  }
</style>
