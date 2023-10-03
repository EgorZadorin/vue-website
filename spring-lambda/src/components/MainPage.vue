<template>
  <div>
    <div class="action-box">
      <div class="input-button-group">
        <input type="text" id="email" v-model="email" class="custom-input" placeholder="Enter your Email" />
        <button @click="addEmail" class="custom-button">Add a New Email</button>
      </div>
    </div>
  </div>

  <div class="action-box">
    <div class="input-button-group">
      <input type="text" id="deleteEmail" v-model="emailToDelete" class="custom-input" placeholder="Enter your Email" />
      <button @click="deleteEmail" class="custom-button-delete">Delete Email</button>
    </div>
  </div>

  <div class="dropdown-wrapper">
    <div class="input-button-group" @click="toggleDropdown">
    <span class="box-label" :class="{ active: dropdownVisible }">
      Display All Emails
      <span class="arrow" @click.stop="toggleDropdown">
        <font-awesome-icon v-if="dropdownVisible" :icon="['fas', 'chevron-up']" size="2x"/>
        <font-awesome-icon v-else :icon="['fas', 'chevron-down']" size="2x"/>
      </span>
    </span>
      <span class="total-emails">Total Emails: {{ emailsAmount }}</span>
    </div>
    <div v-if="dropdownVisible" class="dropdown-content">
      <div v-if="isLoading"></div>
      <div v-if="error" class="text-danger">{{ error }}</div>
      <div v-else>
        <span class="email-item" v-for="emailItem in emails" :key="emailItem.id">{{ emailItem.email }}</span>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span @click="closeModal" class="close-button">&times;</span>
      <p>Are you sure you want to delete the email: {{ emailToDelete }}?</p>
      <button @click="confirmDelete">Yes</button>
      <button @click="closeModal">No</button>
    </div>
  </div>

</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronUp, faChevronDown)
import axios from "axios";

export default {
  name: "MainPage",
  data() {
    return {
      email: "",
      emails: [],
      isLoading: false,
      showModal: false,
      error: null,
      emailsAmount: null,
      emailToDelete: "",
      dropdownVisible: false,
    };
  },
  created() {
    this.fetchEmailsAmount();
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async confirmDelete() {
      const email = this.emailToDelete.trim();

      try {
        await axios.delete(`https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers/email/${email}`);
        await this.fetchEmails();
        await this.fetchEmailsAmount();
        this.emailToDelete = "";
      } catch (error) {
        this.error = "Failed to delete email.";
      }

      // Close the modal
      this.closeModal();
    },
    async addEmail() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = {
          email: this.email
        };
        await axios.post("https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers", data);
        this.email = "";
        await this.fetchEmails();
        await this.fetchEmailsAmount();
      } catch (error) {
        this.error = "Failed to add email.";
      } finally {
        this.isLoading = false;
      }
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
      if (this.dropdownVisible) {
        this.fetchEmails();
      }
    },
    async fetchEmails() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get("https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers-hidden");
        this.emails = response.data;
        await this.fetchEmailsAmount();
      } catch (error) {
        this.error = "Failed to fetch emails.";
      } finally {
        this.isLoading = false;
      }
    },
    async fetchEmailsAmount() {
      this.emailsAmount = null;
      try {
        const response = await axios.get("https://6gest3ir9l.execute-api.eu-central-1.amazonaws.com/subscribers-amount");
        this.emailsAmount = response.data;
      } catch (error) {
        //
      }
    },
    async deleteEmail() {
      this.isLoading = true;
      this.error = null;
      const email = this.emailToDelete.trim();

      try {
        if (!email) {
          this.error = "Please enter an email address to delete.";
          return;
        }
        this.openModal();
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>

.action-box {
  width: 60vw;
  height: 8vh;
  margin: 0;
  display: flex;
  align-items: center;
}

.dropdown-wrapper {
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  width: 60vw;
  height: 8vh;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
}

.input-button-group {
  width: 60vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-emails,
.custom-button,
.custom-button-delete,
.box-label,
.custom-input,
.email-item {
  font-size: calc(0.5vw + 0.5vh);
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  height: 5vh;
  line-height: inherit;
  border-radius: 2em;
}

.box-label,
.custom-input {
  padding-left: 2vw;
  width: 40vw;
  flex-grow: 1;
  background-color: #2B2B2B;
  border: none;
  margin-right: 3em;
}

.custom-input {
  color:  #F0F0F0;
}

.box-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.total-emails,
.custom-button,
.custom-button-delete {
  width: 4vw;
  text-align: center;
  flex-grow: 1;
  font-weight: bold;
  color:  #F0F0F0;
  border: none;
}

.total-emails {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-button,
.custom-button-delete,
.arrow {
  cursor: pointer;
}

.total-emails,
.custom-button {
  background-color: #57BB7E;
}

.custom-button-delete {
  background-color: #797979;
}

.arrow {
  padding: 1em 2em;
  flex: 0 0 auto;
}

.dropdown-content {
  width: 40vw;
  margin-top: -1.5vh;
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  background-color: #393939;
  color: #F0F0F0;
  border-radius: 0 0 0 2em;
  z-index: 0;
}

.email-item {
  padding-left: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2em;
  border-bottom: 0.5vh ridge dimgray;
  color: #F0F0F0;
}

.modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  position: relative;
  margin: auto;
  padding: 20px;
  width: 50%;
  background-color: #fff;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
}

</style>
