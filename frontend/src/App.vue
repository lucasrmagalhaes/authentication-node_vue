<template>
  <v-app>
    <v-toolbar>
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
