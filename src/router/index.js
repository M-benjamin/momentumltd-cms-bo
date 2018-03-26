import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from '@/components/Layout/LayoutAdmin'
import Login from '@/components/Login/Login'
import Section from '@/components/Content/Section'
import Home from '@/components/Content/Home'
import AboutSection from '@/components/Content/Sections/AboutSection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AdminLayout,
      children: [
        { 
          path : '' , 
          name: 'home', 
          component: Home 
        },
        { 
          path : '/section' ,
          name: 'Section', 
          component: Section 
        },
        { 
          path : '/section/about', 
          name: 'AboutSection', 
          component: AboutSection
        }
      ], 
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    // {
    //   path: '*', component: Notfound
    // }
  
  ]
})
