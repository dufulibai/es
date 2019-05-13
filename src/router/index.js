import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/index'
import Sadmin from '@/components/sysAdmin/adminIndex'
import addTeacher from '@/components/sysAdmin/teaTableCon/addTeacher'
import queryTea from '@/components/sysAdmin/teaTableCon/queryTea'
import courseT from '@/components/sysAdmin/claSchedule/courseTime'
import test from '@/components/sysAdmin/claSchedule/test'
import addCourse from '@/components/sysAdmin/claSchedule/addCourse'
import claScheTabCon from '@/components/sysAdmin/claSchedule/claScheTabConIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
    	path: '/sadmin',
    	name:'Sadmin',
    	component: Sadmin,
    	children:[
             {
             	path:'/addTea',
             	component:addTeacher
             },
             {
             	path:'/queryTea',
             	component:queryTea
             },

    	]
    },
    {
        path:'/addCourse',
        name:'addCourse',
        component:addCourse
    },
    {
      path:'/test',
      name:'test',
      component:test
    },
     {
      path:'/cla',
      name:'cla',
      component:claScheTabCon
    }
  ]
})
