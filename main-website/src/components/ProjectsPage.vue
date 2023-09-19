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
  max-width: 800px;
}

.portfolio h2 {
  color: #F0F0F0;
  transform: translateY(-100px);
  font-size: 90px;
  text-align: center;
}

.projects {
  margin-top: -100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
}



.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F0F0F0;
  width: 600px;
  height: 500px;
  padding: 20px;
  border-radius: 40px;
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
  font-size: 30px;
}

.project ul {
  height: 100px;
  overflow-y: auto;
  font-size: 20px;
}


.project h3, .project p, .project ul, .new-project a {
  color: #000000;
  margin: auto;
}

.new-project a {
  padding: 16px 48px;
  display: inline-block;
  background-color: #57BB7E;
  color: #F0F0F0;
  border-radius: 50px;
  font-weight: 900;
  font-size: 20px;
  text-decoration: none;
  margin-top: 40px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.new-project li {
  color: #000000;
}

.new-project ul {
  list-style-type: none;
  margin-bottom: 10px;
}

.new-project p {
  padding: 30px;
  font-size: 20px;
  color: #707070;
}


</style>
