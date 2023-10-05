<template>
  <div>
    <div class="action-box">
      <div class="input-button-group">
        <input
            type="text"
            id="email"
            v-model="email"
            class="custom-input"
            placeholder="Enter your Email"
            @keyup.enter="addEmail"
        />
        <div v-if="showInvalidEmailModal" class="invalid-email-modal">
          <div class="invalid-email-modal-content">
            <span @click="closeInvalidEmailModal" class="close-button">&times;</span>
            Invalid Email Format. Please enter an existing Email in the following format:<br> user@example.com
          </div>
        </div>
        <button @click="addEmail" class="custom-button">Add a New Email</button>
      </div>
    </div>
  </div>

  <div class="action-box">
    <div class="input-button-group">
      <input
          type="text"
          id="deleteEmail"
          v-model="emailToDelete"
          class="custom-input"
          placeholder="Enter your Email"
          @keyup.enter="deleteEmail"
      />
      <div v-if="showInvalidEmailModal" class="invalid-email-modal">
        <div class="invalid-email-modal-content">
          <span @click="closeInvalidEmailModal" class="close-button">&times;</span>
          Invalid Email Format. Please enter an existing Email in the following format:<br> user@example.com
        </div>
      </div>
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
      <span class="total-emails">Total Emails: {{ emailsAmount !== null ? emailsAmount : 0}}</span>
    </div>
    <div v-if="dropdownVisible" class="dropdown-content">
      <div v-if="isLoading"></div>
      <div v-if="error" class="text-danger">{{ error }}</div>
      <div v-else>
        <div v-if="emails.length > 0">
          <span class="email-item" v-for="emailItem in emails" :key="emailItem.id">
            {{ emailItem.email }}
          </span>
        </div>
        <span v-else class="email-item">There are no emails yet!</span>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal" ref="modalElement">
    <div class="modal-content">
      <span @click="closeModal" class="close-button">&times;</span>
      Are you sure you want to delete the email: {{ emailToDelete }}?
      <div class="button-container">
        <button @click="closeModal" class = "modal-button-cancel">Cancel</button>
        <button @click="confirmDelete" class = "modal-button-delete">Delete</button>
      </div>
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
      isAddEmailValid: true,
      isDelEmailValid: true,
      showModal: false,
      showInvalidEmailModal: false,
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
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },
    openModal() {
      this.showModal = true;
      document.addEventListener('keydown', this.navigateButtons);
    },
    navigateButtons(event) {
      const buttons = this.$refs.modalElement.querySelectorAll('.button-container button');
      const index = Array.from(buttons).indexOf(document.activeElement);
      if (event.keyCode === 37 && index > 0) { // Left arrow
        buttons[index - 1].focus();
      }
      if (event.keyCode === 39 && index < buttons.length - 1) { // Right arrow
        buttons[index + 1].focus();
      }
    },
    closeModal() {
      this.showModal = false;
      document.removeEventListener('keydown', this.navigateButtons);
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
      this.closeModal();
    },
    openInvalidEmailModal() {
      this.showInvalidEmailModal = true;
    },
    closeInvalidEmailModal() {
      this.showInvalidEmailModal = false;
    },
    async addEmail() {
      this.isAddEmailValid = this.validateEmail(this.email);
      if (!this.isAddEmailValid) {
        this.openInvalidEmailModal();
        this.isAddEmailValid = true;
        return;
      }
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
      this.isDelEmailValid = this.validateEmail(this.emailToDelete);
      if (!this.isDelEmailValid) {
        this.openInvalidEmailModal();
        this.isDelEmailValid = true;
        return;
      }
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
  margin-right: 3vw;
}

.custom-input {
  color:  #F0F0F0;
}

.box-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
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
.modal-button-cancel,
.modal-button-delete,
.arrow {
  cursor: pointer;
}

.total-emails,
.custom-button {
  color: #F0F0F0;
  background-color: #57BB7E;
}

.modal-button-delete,
.modal-button-cancel {
  font-size: calc(0.5vw + 0.5vh);
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  margin-top: 1vh;
  padding: 0.5vh 0.5vw;
  border-radius: 0.5em;
}

.modal-button-cancel {
  margin-right: 2.5vw;
  color: #F0F0F0;
  background-color: #57BB7E;
}

.modal-button-delete {
  margin-left: 2.5vw;
  color: #F0F0F0;
  background-color: indianred;
}

.custom-button-delete {
  background-color: #797979;
}

.arrow {
  padding: 1em 2em;
  flex: 0 0 auto;
}

.dropdown-content {
  width: 47.5vw;
  margin-top: -1.5vh;
  position: absolute;
  top: calc(100% - 2.2vh);
  left: 0;
  background-color: #393939;
  color: #F0F0F0;
  border-bottom-left-radius: 1.5vw;
  border-bottom-right-radius: 1.5vw;
  z-index: 0;
}

.email-item:first-child {
  margin-top: 2.2vh;
}

.email-item {
  padding-left: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1vh solid #4A4A4A;
  border-radius: 0;
  color: #F0F0F0;
}

.email-item:last-child {
  border-bottom: 0.1vh solid #4A4A4A;
  border-bottom-left-radius: 1.5vw;
  border-bottom-right-radius: 1.5vw;
}

.modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  font-size: calc(0.5vw + 0.5vh);
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  position: relative;
  margin: auto;
  padding: 20px;
  width: 50%;
  background-color: #797979;
  color: #F0F0F0;
  text-align: center;
  border-radius: 0.5em;
}

.button-container {
  justify-content: center;
}

.invalid-email-modal {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.invalid-email-modal-content {
  font-size: calc(0.5vw + 0.5vh);
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  position: relative;
  margin: auto;
  padding: 1vh 1vw;
  text-align: center;
  width: 40%;
  background-color: #797979;
  color: darkred;
  border-radius: 0.5em;
}

.close-button {
  position: absolute;
  right: 1vw;
  top: 0.5vw;
  cursor: pointer;
  color: #000000;
  font-size: calc(1vw + 0.5vh);
}

button:active {
  background-color: #F0F0F0;
  color: #57BB7E;
}

</style>
