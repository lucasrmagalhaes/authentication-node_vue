<template>
  <v-app
    dense
    elevation="4"
    flat
    outlined
  >
    <v-app-bar app>
      <v-btn text to="/">Messages</v-btn>
      <v-btn text to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn text v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn text v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn text v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
    </v-app-bar>
    
    <v-main>
      <br />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';
import Register from './components/Register';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage,
    Register
  },

  data: () => {
    return {}
  },
};
</script>
