import Vue from 'vue'
import VueRouter from 'vue-router'
//const titleLine = resolve => requestAnimationFrame(['@/views/titleLine'], resolve)

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'titleLine',
  //   component: titleLine
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/emit',
    name: 'Emit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/emit/emit.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ref/ref.vue')
  },
  {
    path: '/provide',
    name: 'provide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/provide/A.vue')
  },
  {
    path: '/attrs',
    name: 'attrs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/attrs/index.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vuex/index.vue')
  },
  {
    path: '/store',
    name: 'store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vuex/store.vue')
  },
  {
    path: '/keep',
    name: 'keep',
    meta:{
      keepAlive:true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/keep-alive/keep-father.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/slot/child-father.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
