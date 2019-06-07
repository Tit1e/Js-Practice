import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'

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

Vue.use(mavonEditor)

Vue.use(VueCodemirror, {
  options: {
    styleActiveLine: true,
    theme: 'monokai',
    tabSize: 2,
    mode: 'text/javascript',
    line: false,
    readOnly: 'nocursor'
  },
})
Vue.config.productionTip = false

Vue.component('card', card)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
