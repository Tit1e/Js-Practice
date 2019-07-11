import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import store from '@/store/store'

Vue.use(Router)
const array = [
  {
    name: '数组相关',
    path: '/array',
    redirect: '/array/array-destructuring',
    component: layout,
    children: [
      {
        name: '判断类型',
        path: '/array/instanceof',
        component: () => import('@/views/array/instanceof'),
        meta: { showSave: true }
      },
      {
        name: '数组解构赋值',
        path: '/array/array-destructuring',
        component: () => import('@/views/array/destructuring'),
        meta: { showSave: true }
      },
      {
        name: '数据处理',
        path: '/array/map',
        component: () => import('@/views/array/map'),
        meta: { showSave: true }
      },
      {
        name: '数据过滤',
        path: '/array/filter',
        component: () => import('@/views/array/filter'),
        meta: { showSave: true }
      },
      {
        name: '判断包含',
        path: '/array/includes',
        component: () => import('@/views/array/includes'),
        meta: { showSave: true }
      },
      {
        name: '数组合并',
        path: '/array/concat',
        component: () => import('@/views/array/concat'),
        meta: { showSave: true }
      },
    ]
  }
]
const object = [
  {
    name: '对象相关',
    path: '/object',
    redirect: '/object/object-destructuring',
    component: layout,
    children: [
      {
        name: '对象解构赋值',
        path: '/object/object-destructuring',
        component: () => import('@/views/object/destructuring'),
        meta: { showSave: true }
      },
      {
        name: '对象循环',
        path: '/object/object-for',
        component: () => import('@/views/object/for'),
        meta: { showSave: true }
      },
      {
        name: '获取键名',
        path: '/object/keys',
        component: () => import('@/views/object/keys'),
        meta: { showSave: true }
      },
      {
        name: '浅拷贝',
        path: '/object/assign',
        component: () => import('@/views/object/assign'),
        meta: { showSave: true }
      },
      {
        name: '对象赋值',
        path: '/object/set-object',
        component: () => import('@/views/object/set-object'),
        meta: { showSave: true }
      },
    ]
  }
]
const string = [
  {
    name: '字符串相关',
    path: '/string',
    redirect: '/string/indexof',
    component: layout,
    children: [
      {
        name: '字符判断',
        path: '/string/indexof',
        component: () => import('@/views/string/indexof'),
        meta: { showSave: true }
      },
      {
        name: '字符打断',
        path: '/string/split',
        component: () => import('@/views/string/split'),
        meta: { showSave: true }
      },
      {
        name: '模板字符串',
        path: '/string/template-literals',
        component: () => import('@/views/string/templateLiterals'),
        meta: { showSave: true }
      },
      {
        name: '字符串截取',
        path: '/string/substring',
        component: () => import('@/views/string/substring'),
        meta: { showSave: true }
      },
    ]
  }
]
const date = [
  {
    name: '日期相关',
    path: '/date',
    redirect: '/date/date',
    component: layout,
    children: [
      {
        name: '日期处理',
        path: '/date/date',
        component: () => import('@/views/date/date'),
        meta: { showSave: true }
      },
    ]
  }
]
const vue = [
  {
    name: 'Vue 相关',
    path: '/vue',
    redirect: '/vue/vue',
    component: layout,
    children: [
      {
        name: 'Vue',
        path: '/vue/vue',
        component: () => import('@/views/vue/vue'),
        meta: { showSave: true }
      },
    ]
  }
]
const element = [
  {
    name: 'Element 相关',
    path: '/element',
    redirect: '/element/table',
    component: layout,
    children: [
      {
        name: 'Table',
        path: '/element/table',
        component: () => import('@/views/element/table'),
        meta: { showSave: false }
      },
    ]
  }
]
const routes = [
  {
    name: '说明',
    path: '/',
    redirect: '/description',
    component: layout,
    children: [
      {
        name: '项目说明',
        path: '/description',
        component: () => import('@/views/description'),
        meta: { showSave: false }
      },
      {
        name: 'API 文档',
        path: '/apiDocument',
        component: () => import('@/views/apiDocument'),
        meta: { showSave: false }
      },
    ]
  },
  ...array,
  ...object,
  ...string,
  ...date,
  ...vue,
  ...element,
]

store.commit('setMenu', routes)


export default new Router({
  routes,
})
