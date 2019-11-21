import Vue from 'vue'
import Router,{ RouteConfig, Route, NavigationGuard } from 'vue-router'
import Component from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes:RouteConfig[] = [
  {
      path:'/',
      redirect:'/main'
  },
  {
    path: '/main',
    name: 'main',
    component: HelloWorld
  }
]
const router:Router = new Router({
  mode:'history',
  base:'/',
  routes
})
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
