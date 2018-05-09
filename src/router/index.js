import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import gzll from '@/components/gzll'
import info from '@/components/info'
import infopage from '@/components/infoPage'
import salary from '@/components/salary'
import salaryPage from '@/components/salaryPage'
import aqjy from '@/components/aqjy'
import gzllPage from '@/components/gzllPage'
import me from '@/components/me'
import ygpj from '@/components/ygpj'
import sdpj from '@/components/sdpj'
import fqpj from '@/components/fqpj'
import flwq from '@/components/flwq'
import wypj from '@/components/wypj'
import login from '@/components/login'
import yhxy from '@/components/yhxy'
import yzm from '@/components/yzm'
import errorPage from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:'/gzll',
      name:'gzll',
      component:gzll
    },{
      path:'/info',
      name:'info',
      component:info
    },{
      path:'/infoPage/:id',
      name:'infoPage',
      component:infopage
    },{
      path:'/salary',
      name:'salary',
      component:salary
    },{
      path:'/salaryPage/:id',
      name:'salaryPage',
      component:salaryPage
    },{
      path:'/aqjy',
      name:'aqjy',
      component:aqjy
    },{
      path:'/gzllPage/:id',
      name:'gzllPage',
      component:gzllPage
    },{
      path:'/me',
      name:'me',
      component:me
    },{
      path:'/ygpj',
      name:'ygpj',
      component:ygpj,
      children:[
        {
          path:'sdpj',
          name:'sdpj',
          component:sdpj
        },{
          path:'fqpj',
          name:'fqpj',
          component:fqpj
        },{
          path:'flwq',
          name:'flwq',
          component:flwq
        }
      ]
    },{
      path:'/wypj',
      name:'wypj',
      component:wypj
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/yhxy',
      name:'yhxy',
      component:yhxy
    },{
      path:'/yzm',
      name:'yzm',
      component:yzm
    },{
      path:'/errorPage/:id',
      name:'errorPage',
      component:errorPage
    }
  ]
})
