import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: '主页',
    component: HomeView,
    meta:{
      title:"首页",
      keepAlive:true,
    },

  },
  {
    path: '/MovieView',
    name: '影视',
    component: () => import('../views/MovieView.vue'),
    meta: {}
  },
  {
    path: '/MusicView',
    name: '音乐',
    meta: {},
    component: () => import('../views/MusicView.vue')
  },
  {
    path: '/GameView',
    name: '游戏',
    meta: {},
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/LiveView',
    name: '直播',
    meta: {},
    component: () => import('../views/LiveView.vue')
  },
  {
    path: '/ShopView',
    name: '购物',
    component: () => import('../views/ShopView.vue'),
    meta: {
      title:"购物",
      keepAlive:true,
    },
  },
  {
    path: '/ProduceView',
    name: '设计',
    meta: {},
    component: () => import('../views/ProduceView.vue')
  },
  {
    path: '/ScienceView',
    name: '学术',
    meta: {},
    component: () => import('../views/ScienceView.vue')
  },
  {
    path: '/RegisterView',
    name: '注册',
    meta: {},
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/MyView',
    name: '个人中心',
    meta: {},
    component: () => import('../views/MyView.vue')
  },
  {
    path: '/WorkView',
    name: '创作工坊',
    meta: {},
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '/MessageView',
    name: '消息',
    meta: {},
    component: () => import('../views/MessageView.vue')
  },
  {
    path: '/MessageView',
    name: '消息',
    meta: {},
    component: () => import('../views/MessageView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
