import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
import dayjs from 'dayjs'

import '@/assets/index.scss'
import '@/assets/transition.scss'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript.js'

// mavon-editor
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'

import card from '@/components/card'

import axios from '@/utils/axios'

import Notify from '@/utils/notify.js'

import { getSubject, saveSubject } from '@/utils/methods.js'

Vue.use(mavonEditor)

Vue.use(VueCodemirror, {
  options: {
    styleActiveLine: true,
    theme: 'monokai',
    tabSize: 2,
    mode: 'text/javascript',
    line: false,
    // readOnly: 'nocursor' //只读
  },
})

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$Notify = Notify
Vue.prototype.getSubject = getSubject
Vue.prototype.saveSubject = saveSubject
Vue.prototype.$dayjs = dayjs

Vue.component('card', card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
