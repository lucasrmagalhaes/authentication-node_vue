<template>
  <v-app>
    <v-toolbar>
    </v-toolbar> 
    
    <v-main>
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
import Messages from './components/Messages';

export default {
  name: 'App',

  components: {
    Messages,
  },

  data: () => ({
    //
  }),
};
</script>
