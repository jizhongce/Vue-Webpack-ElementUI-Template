<template>
  <div id="app">
    {{#router}}
    <router-view/>
    {{else}}

    {{#if_eq Template "template1"}}
    <Template1/>
    {{/if_eq}}

    {{#if_eq Template "template2"}}
    <Template2/>
    {{/if_eq}}

    
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Template1 from './components/Template1'

import Template2 from './components/Template2'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Template1,
    Template2
  }{{/router}}
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
