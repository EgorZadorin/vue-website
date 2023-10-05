<template>
  <div id="app-wrapper">
    <h1>Welcome to Email Service</h1>
    <p>
      The Email Service is designed to ensure both security and confidentiality in email communications. It is crucial for everyone to safeguard their email addresses to avoid public exposure.
      Publicly displaying your email not only attracts spam but also increases the risk of cyberattacks (<a href="https://securityintelligence.com/articles/is-it-time-to-hide-your-work-emails/">Security Intelligence</a>).
      If you wish to contact me, simply enter your email on this website; it will be encrypted and stored in my database. An immediate notification to my private email will be triggered, and I'll respond at my earliest convenience.
      Should you choose to remove your contact information later, you can easily delete your email. Additional features include an email counter and the ability to display all stored email addresses in a confidential manner.
    </p>
    <p>
      Initially conceived by Egor Zadorin as a proof-of-concept project, this application is a streamlined, serverless solution. It adheres to RESTful guidelines for its HTTP API and ensures reliable database communication.
      Built with Java Spring Boot, the backend component is hosted on AWS Lambda, providing performance benefits and adaptability.
      The primary advantages of adopting a serverless architecture include cost-efficiency and scalability compared to traditional server setups.
      AWS Lambda minimizes the overhead typically associated with server maintenance tasks, such as memory management, request parallelization, and environment updates.
      While the VueJS frontend component may seem straightforward, the underlying AWS architecture is rather intricate, as depicted in the <a href="https://egor-zadorin-files.s3.eu-central-1.amazonaws.com/Emails_Service_Diagram.png">architecture diagram</a>.
    </p>
    <MainPage />
  </div>
</template>

<script>1
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