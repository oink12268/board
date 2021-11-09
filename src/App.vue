<template>
  <div id="app">
<!--    <main></main>-->
    <left></left>
    <router-view/>
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
</style>
