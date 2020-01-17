import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';
import messages from "./lang/messages";

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Chartkick.use(Chart));

let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'fr',
  locale: locale,
  messages
})

new Vue({
  i18n,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
