import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import vuetify from './plugins/vuetify'

import VueRouter from 'vue-router'
import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import Message from './components/Message'
import Register from './components/Register'
import Login from './components/Login'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Messages },
  { path: "/NewMessage", component: NewMessage },
  { path: "/Message/:id", component: Message },
  { path: "/Register", component: Register },
  { path: "/Login", component: Login },
];

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
