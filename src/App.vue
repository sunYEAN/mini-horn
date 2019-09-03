<template>
  <div id="app">
    <mini-horn direction="horizontal"></mini-horn>
    <mini-horn direction="horizontal" :interval="1000"></mini-horn>
    <mini-horn direction="horizontal" :animation-time="200"></mini-horn>
    <mini-horn direction="vertical"></mini-horn>
    <mini-horn direction="horizontal" :step-block="false"></mini-horn>
    <mini-horn direction="vertical" :step-block="false"></mini-horn>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

h1, h2 {
  font-weight: normal;
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
