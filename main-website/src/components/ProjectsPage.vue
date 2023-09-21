<template>
  <div class="portfolio">
    <h2>PROJECTS</h2>
    <div class="projects">
      <div class="project new-project">
        <div class="project-content">
          <h3>Spring Boot + AWS Lambda Project</h3>
          <ul>
            <li>This project demonstrates a Spring Boot app integrated with AWS Lambda, exposing RESTful APIs</li>
          </ul>
        </div>
        <div class="project-action">
          <p><strong>Tech Stack:</strong> Java, Spring Boot, AWS Lambda, AWS API Gateway, AWS SAM</p>
          <a href="https://spring.egorzadorin.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
        </div>
      </div>
      <div class="project new-project">
        <div class="project-content">
          <h3>Stock Price Predictor & Alert System</h3>
          <ul>
            <li>Predict stock prices using historical data.</li>
            <li>Generate visual reports for the predicted vs actual prices.</li>
            <li>Send alerts when it's optimal to buy/sell.</li>
          </ul>
        </div>
        <div class="project-action">
          <p><strong>Tech Stack:</strong> Python, Pandas, Scikit-learn, Matplotlib/Seaborn, Docker, Kubernetes.</p>
          <a href="http://python.egorzadorin.com" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
};
</script>

<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80vw;
}

.portfolio h2 {
  color: #F0F0F0;
  transform: translateY(-10vh);
  font-size: 5vw;
  text-align: center;
}

.projects {
  margin-top: -10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F0F0F0;
  width: 30vw;
  height: 50vh;
  padding: 2vh;
  border-radius: 2.5vw;
  text-align: center;
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.project h3 {
  font-size: 3vh;
}

.project ul {
  height: 10vh;
  overflow-y: auto;
  font-size: 2vh;
}


.project h3, .project p, .project ul, .new-project a {
  color: #000000;
  margin: auto;
}

.new-project a {
  padding: 2.4% 7.2%;
  display: inline-block;
  background-color: #57BB7E;
  color: #F0F0F0;
  border-radius: 5vw;
  font-weight: 900;
  font-size: 2.5vh;
  text-decoration: none;
  margin-top: 4vh;
  margin-bottom: 2vh;
  box-shadow: 0 0.4vw 0.8vw 0 rgba(0, 0, 0, 0.2);
}

.new-project li {
  font-weight: 600;
  color: #000000;
}

.new-project ul {
  list-style-type: none;
}

.new-project p {
  margin-bottom: 3vh;
  font-size: 2vh;
  color: #707070;
}

@media (max-width: 767px) {

 .portfolio h2 {
   transform: translateY(-15vh);
   font-size: 10vw;
 }

  .project {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F0F0F0;
    width: 65vw;
    height: 20vh;
    padding: 2vh;
    border-radius: 5vw;
    text-align: center;
  }

  .project-content ul {
    display: none;
  }

  .new-project p {
    margin-bottom: 0;
    font-size: 1.5vh;
  }

  .new-project a {
   margin-top: 1vh;
  }

}

</style>
