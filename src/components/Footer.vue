<template>
    <footer class="footer">
        <p>© 2020-2021 <b>Tong-uán Lab</b></p>
    </footer>
</template>

<script>
    export default {
      name: 'Footer',
      props: {
        msg: String
      }
    }    
</script>

<style scoped>
    footer {
            color: #333;
    font-family: Segoe UI Regular WestEuropean,Segoe UI,Tahoma,Arial,sans-serif;
    font-weight: 400;
    }
</style>
