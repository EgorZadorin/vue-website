<template>
  <div id="app-wrapper">
    <h1>Welcome to Email Service</h1>
    <p>
      The Email Service, which was initially conceived by Egor Zadorin as a proof-of-concept project, is a streamlined, serverless solution.
      This application follows RESTful guidelines for its HTTP API, facilitating reliable communication with a database.
      Built with Java Spring Boot, the Backend component resides on AWS Lambda, offering performance benefits and adaptability, making it well-suited for a variety of tasks
      The primary advantages of adopting a serverless architecture are its cost-efficiency and scalability compared to traditional server setups.
      AWS Lambda's features minimize the overhead traditionally associated with server maintenance, including tasks like memory management, request parallelization, and updating the environment.    </p>
    <p>
      The application enables secure, user-friendly interactions. If you wish to contact me, simply add your email to the database, where it is stored in encrypted form.
      Upon submission, I receive immediate notification and will respond at my earliest convenience. If you decide to withdraw your contact information, you can easily delete your email from the database.
      Additional features include an email counter and the capability to retrieve all email addresses while maintaining strict confidentiality.
      While the VueJS Frontend component may appear straightforward, the underlying AWS architecture is quite intricate, as illustrated in the <a href="https://egor-zadorin-files.s3.eu-central-1.amazonaws.com/Emails_Service_Diagram.png">architecture diagram</a>.
    </p>
    <MainPage />
  </div>
</template>

<script>
import MainPage from "@/components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;900&display=swap');

#app-wrapper {
  width: 60vw;
  margin-top: 10vh;
  margin-left: 20vw;
  text-align: left;
}

body, h1, p {
  font-family: 'Raleway', sans-serif;
  color:  #F0F0F0;
  background-color: #000000;
}

h1 {
  font-size: calc(1.5vh + 2.5vw);
  font-weight: bold;
}

p {
  font-size: calc(0.5vh + 0.8vw);
  font-weight: normal;
}

a {
  text-decoration: none;
  color: #57BB7E;
}

</style>