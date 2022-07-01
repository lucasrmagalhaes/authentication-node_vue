<template>
  <v-app>
    <v-toobar app>
    </v-toobar> 
    
    <v-content>
      <Messages />
    </v-content>
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
