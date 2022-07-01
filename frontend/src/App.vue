<template>
  <v-app>
    <v-toolbar>
      <v-btn text>Messages</v-btn>
      <v-spacer />
      <v-btn text>Login</v-btn>
    </v-toolbar>
    
    <v-main>
      <br />
      <NewMessage />
      <br />
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage
  },

  data: () => ({
    //
  }),
};
</script>
