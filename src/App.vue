<template>
<div id="app">
    <img id="logo" alt="TongUan logo" src="./assets/logo.png">
    <TongUanProjects msg="Welcome to Tong-uán Lab" />
    <Footer msg="" />

</div>
</template>

<script>
import TongUanProjects from './components/TongUanProjects.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'app',
    components: {
        TongUanProjects,
        Footer,
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

#logo {
    height: 275px;
    border-radius: 50%;
    background-color: #46cba4;
    margin-top: 2em;
    margin-bottom: 2em;
}
</style>
