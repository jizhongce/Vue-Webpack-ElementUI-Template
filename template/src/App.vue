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

    {{#if_eq Template "template3"}}
    <Template3/>
    {{/if_eq}}

    {{#if_eq Template "template4"}}
    <Template4/>
    {{/if_eq}}

    {{#if_eq Template "template5"}}
    <Template5/>
    {{/if_eq}}

    {{#if_eq Template "template6"}}
    <Template6/>
    {{/if_eq}}

    {{#if_eq Template "template7"}}
    <Template7/>
    {{/if_eq}}

    
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}

{{#if_eq Template "template1"}}
import Template1 from './components/Template1'
{{/if_eq}}

{{#if_eq Template "template2"}}
import Template2 from './components/Template2'
{{/if_eq}}

{{#if_eq Template "template3"}}
import Template3 from './components/Template3'
{{/if_eq}}

{{#if_eq Template "template4"}}
import Template4 from './components/Template4'
{{/if_eq}}

{{#if_eq Template "template5"}}
import Template5 from './components/Template5'
{{/if_eq}}

{{#if_eq Template "template6"}}
import Template6 from './components/Template6'
{{/if_eq}}

{{#if_eq Template "template7"}}
import Template7 from './components/Template7'
{{/if_eq}}


{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    {{#if_eq Template "template1"}}
    Template1,
    {{/if_eq}}

    {{#if_eq Template "template2"}}
    Template2,
    {{/if_eq}}

    {{#if_eq Template "template3"}}
    Template3,
    {{/if_eq}}

    {{#if_eq Template "template4"}}
    Template4,
    {{/if_eq}}

    {{#if_eq Template "template5"}}
    Template5,
    {{/if_eq}}

    {{#if_eq Template "template6"}}
    Template6,
    {{/if_eq}}

    {{#if_eq Template "template7"}}
    Template7,
    {{/if_eq}}

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
