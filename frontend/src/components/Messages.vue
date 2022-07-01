<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <v-list-item v-for="message in store.state.messages" @click="">
                    <v-list-item-title 
                        v-text="message"
                        link
                    />
                </v-list-item>
            </v-list>
        </v-card>
    </v-flex>
</template>

<script>
import axios from 'axios';
import store from '../store.js';

export default {
    data() {
        return { 
            store
        };
    },
    async created() {
        store.state.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>

<style></style>