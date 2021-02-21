<template>
<div id="app">
    <Menu />
    <Content ref="content" />
    <Footer ref="footer" />

</div>
</template>

<script>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
    name: 'app',
    components: {
        Content,
        Footer,
        Menu
    },
    methods: {
        changeLanguage(command) {
            if (command == "zh-hant") {
                this.$refs.content.setZht();
                this.$refs.footer.setZht();
            }
            if (command == "zh-hans") {
                this.$refs.content.setZhs();
                this.$refs.footer.setZhs();
            } else if (command == "en") {
                this.$refs.content.setEn();
                this.$refs.footer.setEn();
            }
        }
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
