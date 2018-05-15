<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}
    <Login/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Login from './views/Login';

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Login,
  }{{/router}}
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
