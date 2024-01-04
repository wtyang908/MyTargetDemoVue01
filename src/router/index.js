import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TtdMessages from '@/views/TtdMessages'
import Detail from '@/views/detail'
import Test from '@/views/test'

Vue.use(Router)



export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TtdMessages',
      name: 'TtdMessages',
      component: TtdMessages
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
  ]
})
