<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            
            <v-form>
                <v-container>
                    <v-layout>
                        <v-flex xs12 md4>
                            <v-text-field v-model="userName" label="User Name" required />
                        </v-flex>

                        <v-flex xs12 md4>
                            <v-text-field v-model="password" label="Password" required />
                        </v-flex>
                    </v-layout>
                </v-container>

                <v-btn @click="register" color="primary">Register</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return { 
            userName: "",
            password: ""
        };
    },
    methods: {
        async register() {
            this.$store.dispatch('register', {
                userName: this.userName,
                password: this.password
            });
        }
    }
}
</script>