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
    }
  ]
})
