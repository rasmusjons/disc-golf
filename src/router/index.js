import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCourses from '../views/CreateCourses.vue'
import Courses from '../views/Courses.vue'
import CreateGame from '../views/CreateGame.vue'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import ScoreCardRound from '../views/ScoreCardRound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createcourses',
    name: 'CreateCourses',
    component: CreateCourses
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/creategame',
    name: 'CreateGame',
    component: CreateGame
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  },
  {
    path: '/scorecardround',
    name: 'ScoreCardRound',
    component: ScoreCardRound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
