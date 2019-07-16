import Vue from 'vue'
import Router from 'vue-router'

{{#if_eq Template "template1"}}
import Template1 from '@/components/Template1'
{{/if_eq}}

{{#if_eq Template "template2"}}
import Template2 from '@/components/Template2'
{{/if_eq}}

{{#if_eq Template "template3"}}
import Template3 from '@/components/Template3'
{{/if_eq}}

{{#if_eq Template "template4"}}
import Template4 from '@/components/Template4'
{{/if_eq}}

{{#if_eq Template "template5"}}
import Template5 from '@/components/Template5'
{{/if_eq}}

{{#if_eq Template "template6"}}
import Template6 from '@/components/Template6'
{{/if_eq}}

{{#if_eq Template "template7"}}
import Template7 from '@/components/Template7'
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

    {{#if_eq Template "template3"}}
    {
      path: '/',
      name: 'Template3',
      component: Template3
    },
    {{/if_eq}}

    {{#if_eq Template "template4"}}
    {
      path: '/',
      name: 'Template4',
      component: Template4
    },
    {{/if_eq}}

    {{#if_eq Template "template5"}}
    {
      path: '/',
      name: 'Template5',
      component: Template5
    },
    {{/if_eq}}

    {{#if_eq Template "template6"}}
    {
      path: '/',
      name: 'Template6',
      component: Template6
    },
    {{/if_eq}}

    {{#if_eq Template "template7"}}
    {
      path: '/',
      name: 'Template7',
      component: Template7
    },
    {{/if_eq}}
  ]
})
