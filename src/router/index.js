import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sound from '@/components/Sound'
import Mic from '@/components/Mic'
import Play from '@/components/Play'
import AboutMe from '@/components/AboutMe'
import LocalSession from '@/components/LocalSession'
import sessionStrong from '@/components/sessionStrong'
Vue.use(Router)

export default new Router({
  routes: [
   { path: '*', redirect: '/' },
         {
            path: '/',
            name: 'Home',
            component: Home
    },

        {
            path: '/ls',
            name: 'LocalSession',
            component: LocalSession
    },
        ,

        {
            path: '/ss',
            name: 'sessionStrong',
            component: sessionStrong,
        },
        {
            path: '/sound',
            name: 'Sound',
            component: Sound
        },
        {
            path: '/mic',
            name: 'Mic',
            component: Mic
        },
        {
            path: '/play',
            name: 'Play',
            component: Play
        },
        {
            path: '/aboutme',
            name: 'AboutMe',
            component: AboutMe,
        }
    ]
})
