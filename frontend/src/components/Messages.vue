<template>
    <div>
        <h4 class="display-1">Messages</h4>

        <v-list>
            <v-list-item v-for="message in messages" @click="">
                <v-list-item-title 
                    v-text="message"
                    link
                />
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return { 
            messages: ["hello", "hi", "its working"] 
        };
    },
    async created() {
        this.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
}
</script>

<style></style>