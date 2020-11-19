<template>
  <div id="app">
    <img alt="TongUan logo" src="./assets/logo2.png" style="height: 300px; border-radius:50%; background-color: #46cba4;">
    <TongUanProjects msg="Welcome to Tong-uán Lab"/>
	<TongUanFooter msg=""/>
  </div>
</template>

<script>
import TongUanProjects from './components/TongUanProjects.vue'
import TongUanFooter from './components/TongUanFooter.vue'

export default {
  name: 'app',
  components: {
    TongUanProjects,
	TongUanFooter
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
