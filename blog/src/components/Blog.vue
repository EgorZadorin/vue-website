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
      <div v-if="isLoading">Loading...</div>
      <div v-if="error">{{ error }}</div>
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
      isLoading: false, // to control the spinner
      error: null, // to display error messages
    };
  },
  methods: {
    async addEmail() {
      this.isLoading = true;
      this.error = null;
      try {
        const emailData = {
          id: 1, // Shouldn't this be dynamically generated?
          email: this.email,
        };
        await axios.post("https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers", emailData);
        this.email = "";
        await this.fetchEmails();  // Auto-fetch emails
      } catch (error) {
        this.error = "Failed to add email."; // Setting an error message
      } finally {
        this.isLoading = false;
      }
    },
    async fetchEmails() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get("https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers");
        this.emails = response.data;
      } catch (error) {
        this.error = "Failed to fetch emails."; // Setting an error message
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Styles */
</style>