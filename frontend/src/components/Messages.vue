<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <v-list-item 
                    v-for="(message, index) in $store.state.messages" 
                    :to="'message/' + index"
                >
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
export default {
    async created() {
        this.$store.dispatch('getMessages');
    }
}
</script>