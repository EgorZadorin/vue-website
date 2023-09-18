<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <div class="projects">
      <div class="project new-project">
        <h3>Spring Boot + AWS Lambda Project</h3>
        <ul>
          <li>This project demonstrates a Spring Boot app integrated with AWS Lambda, exposing RESTful APIs</li>
        </ul>
        <p><strong>Tech Stack:</strong> Java, Spring Boot, AWS Lambda, AWS API Gateway, AWS SAM</p>
        <a href="https://spring.egorzadorin.com" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div class="project new-project">
        <h3>Stock Price Predictor & Alert System</h3>
        <ul>
          <li>Predict stock prices using historical data.</li>
          <li>Generate visual reports for the predicted vs actual prices.</li>
          <li>Send alerts when it's optimal to buy/sell.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, Pandas, Scikit-learn, Matplotlib/Seaborn, Docker, Kubernetes.</p>
        <a href="http://python.egorzadorin.com" target="_blank" rel="noopener noreferrer">View Project</a>
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
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.project {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
}

.project h3 {
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.project p {
  color: #333;
  margin-bottom: 0;
}

.new-project a {
  display: inline-block;
  background-color: #3CB371;
  color: black;
  padding: 8px 16px;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
}

.new-project li {
  color: black;
}

.new-project ul {
  margin-bottom: 10px;
}

</style>
