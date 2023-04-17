<!-- src/components/Blog.vue -->
<template>
    <div>
        <h1>Emails</h1>
        <div>
            <h2>Add a new email</h2>
            <label for="email">Email:</label>
            <input type="text" id="email" v-model="email" />
            <button @click="addEmail">Add Email</button>
        </div>
        <div>
            <h2>All Emails</h2>
            <button @click="fetchEmails">Fetch Emails</button>
            <ul>
                <li v-for="emailItem in emails" :key="emailItem.id">
                    {{ emailItem.id }} - {{ emailItem.email }}
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import axios from "axios";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Blog",
    data() {
        return {
            email: "",
            emails: [],
        };
    },
    methods: {
        async addEmail() {
            try {
                const emailData = {
                    id: 1,
                    email: this.email,
                };
                await axios.post("https://mrbgdx287a.execute-api.eu-central-1.amazonaws.com/subscribers", emailData);
                this.email = "";
            } catch (error) {
                console.error(error);
            }
        },
        async fetchEmails() {
            try {
                const response = await axios.get("https://mrbgdx287a.execute-api.eu-central-1.amazonaws.com/subscribers");
                this.emails = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>


<style scoped>
/* Add any styles for the Blog component here */
</style>
