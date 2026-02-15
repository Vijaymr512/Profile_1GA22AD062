import farmconnectImg from "../assets/farmconnect.jpg";
import warehouseImg from "../assets/warehouse.jpg";
import aqiImg from "../assets/aqi.jpg";
import kidzsphereImg from "../assets/kidzsphere.jpg";

function Projects() {
  return (
    <section aria-label="Projects Section">
      <h2>Project Showcase</h2>

      <div className="grid container">

        <div className="card">
          <img src={farmconnectImg} alt="FarmConnect Project" className="project-image" />
          <h3>FarmConnect</h3>
          <p>
            Built a direct-to-consumer e-commerce platform connecting 
            farmers with buyers and improving supply chain transparency.
          </p>
          <a href="https://github.com/Vijaymr512/FarmConnect" target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>

        <div className="card">
          <img src={warehouseImg} alt="Warehouse Management System" className="project-image" />
          <h3>Warehouse Management System</h3>
          <p>
            Real-time inventory tracking system with barcode scanning 
            for improved warehouse efficiency.
          </p>
          <a href="https://github.com/Vijaymr512/Warehouse-Management-System" target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>

        <div className="card">
          <img src={aqiImg} alt="AQI Prediction Tool" className="project-image" />
          <h3>Air Quality Index Prediction Tool</h3>
          <p>
            ML-powered dashboard using LSTM and Random Forest 
            to forecast environmental trends.
          </p>
          <a href="https://github.com/Vijaymr512/AQI-Prediction" target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>

        <div className="card">
          <img src={kidzsphereImg} alt="KidzSphere Platform" className="project-image" />
          <h3>KidzSphere</h3>
          <p>
            Interactive children’s learning platform with 
            engaging animations and gamified UI.
          </p>
          <a href="https://github.com/Vijaymr512/KidzSphere" target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
