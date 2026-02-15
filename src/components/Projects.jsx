function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid container">

        <div className="card">
          <h3>EV Range Estimation System</h3>
          <p>
            Developed a real-time EV driving range estimation model using
            Fuzzy Logic and TOPSIS. Improved prediction accuracy under
            varying traffic and environmental conditions.
          </p>
          <a href="https://github.com/YOUR_USERNAME/EV_Project" target="_blank">
            View GitHub
          </a>
        </div>

        <div className="card">
          <h3>Warehouse Management System</h3>
          <p>
            Built a system to digitize warehouse inventory tracking and
            reduce manual stock errors. Implemented real-time stock updates
            and admin dashboards.
          </p>
          <a href="https://github.com/YOUR_USERNAME/Warehouse_Project" target="_blank">
            View GitHub
          </a>
        </div>

        <div className="card">
          <h3>Machine Learning GUI App</h3>
          <p>
            Designed a Streamlit-based regression app supporting CSV uploads
            and live predictions. Enabled non-technical users to test ML models
            interactively.
          </p>
          <a href="https://github.com/YOUR_USERNAME/ML_GUI_Project" target="_blank">
            View GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
