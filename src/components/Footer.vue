<template>
<footer class="footer">
    <p>© 2020-2021 <b>{{ msg }}</b></p>
</footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        //msg: String
    },
    data: () => ({
        msg: "Tong-uán Lab",
    }),
    methods: {
        setZht() {
            this.msg = "東苑實驗室";
        },
        setZhs() {
            this.msg = "东苑实验室";
        },
        setEn() {
            this.msg = "Tong-uán Lab";
        }
    }
}
</script>

<style scoped>
footer {
    color: #333;
    font-family: Segoe UI Regular WestEuropean, Segoe UI, Tahoma, Arial, sans-serif;
    font-weight: 400;
}
</style>
