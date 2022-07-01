<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Message</v-toolbar-title>
            </v-toolbar>
        </v-card>

        <v-card-text>{{ messageBody }}</v-card-text>
    </v-flex>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return { 
            messageBody: ""
        };
    },
    async created() {
        this.messageBody = (await this.$store.dispatch('getMessage', this.$route.params.id)).data;
    }
}
</script>