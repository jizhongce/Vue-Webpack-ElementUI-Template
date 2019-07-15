import Vue from 'vue'
import Router from 'vue-router'

{{#if_eq Template "template1"}}
import Template1 from '@/components/Template1'
{{/if_eq}}

{{#if_eq Template "template2"}}
import Template2 from '@/components/Template2'
{{/if_eq}}



Vue.use(Router)

export default new Router({
  routes: [
    {{#if_eq Template "template1"}}
    {
      path: '/',
      name: 'Template1',
      component: Template1
    },
    {{/if_eq}}
    
    {{#if_eq Template "template2"}}
    {
      path: '/',
      name: 'Template2',
      component: Template2
    },
    {{/if_eq}}
  ]
})
