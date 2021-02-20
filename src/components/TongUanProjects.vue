<template>
    <div class="">
        <h2>{{ msg }}</h2>
        <h3>Projects</h3>
        <ul>
          <li><a href="https://unlui.enatsu.top" target="_blank" rel="noopener">Ūn-luī 韻彙</a>: A Hokkien dictionary.</li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'TongUanProjects',
      props: {
        msg: String
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
