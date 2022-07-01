import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Messages from './components/Messages'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Messages }
];

const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
