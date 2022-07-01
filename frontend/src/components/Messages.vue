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
export default {
    data() {
        return { messages: ["hello", "hi", "its working"] }
    }
}
</script>

<style></style>