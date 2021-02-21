<template>
<div class="content">
    <img id="logo" alt="TongUan logo" height="250" src="../assets/logo.png">
    <h2>{{ welcome }}</h2>
    <h3>{{ projects }}</h3>
    <ul>
        <li><a href="https://unlui.enatsu.top" target="_blank" rel="noopener"><b>{{ unlui }}</b></a>{{ unlui_description }}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Content',
    data: () => ({
        welcome: "Welcome to Tong-uán Lab",
        projects: "Projects",
        unlui: "Ūn-luī 韻彙",
        unlui_description: ": A Hokkien dictionary.",
    }),
    methods: {
        setEn() {
            this.welcome = "Welcome to Tong-uán Lab";
            this.projects = "Projects";
            this.unlui= "Ūn-luī 韻彙";
            this.unlui_description = ": A Hokkien dictionary.";
        },
        setZht() {
            this.welcome = "歡迎光臨東苑實驗室";
            this.projects = "項目";
            this.unlui= "Ūn-luī 韻彙";
            this.unlui_description = "：閩南語字辭典";
        },
        setZhs() {
            this.welcome = "欢迎光临东苑实验室";
            this.projects = "项目";
            this.unlui= "Ūn-luī 韵汇";
            this.unlui_description = "：闽南语字辞典";
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.content {
    margin: 0 0 25px 0;
}

#logo {
    border-radius: 50%;
    background-color: #46cba4;
    margin-top: 2.5em;
    margin-bottom: 1em;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
