<template>
  <div id="app">
    <mini-horn ref="horn0" class="horn" direction="horizontal"></mini-horn>
    <mini-horn ref="horn1" class="horn" direction="horizontal" :interval="1000"></mini-horn>
    <mini-horn ref="horn2" class="horn" direction="horizontal" :animation-time="200"></mini-horn>
    <mini-horn ref="horn3" class="horn" direction="vertical"></mini-horn>
    <mini-horn ref="horn4" class="horn" direction="horizontal" :step-block="false"></mini-horn>
    <mini-horn ref="horn5" class="horn" direction="vertical" :step-block="false"></mini-horn>

    <button @click="onRefresh">刷新</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onRefresh () {
      for (let i = 0; i < 6; i++) {
        this.$refs['horn' + i].refresh();
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
#app{
  display: flex;
}
  .horn{
    margin: 20px;
  }
</style>
