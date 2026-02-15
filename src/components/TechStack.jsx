function TechStack() {
  return (
    <section aria-label="Tech Stack Section">
      <h2>Tech Stack</h2>

      <h3>Proficient</h3>
      <div className="tech-grid container">
        <div className="tech-card proficient">Python</div>
        <div className="tech-card proficient">ReactJS</div>
        <div className="tech-card proficient">Machine Learning</div>
        <div className="tech-card proficient">JavaScript</div>
        <div className="tech-card proficient">MySQL</div>
        <div className="tech-card proficient">Flask / Django</div>
      </div>

      <h3 style={{ marginTop: "50px" }}>Familiar</h3>
      <div className="tech-grid container">
        <div className="tech-card familiar">Deep Learning</div>
        <div className="tech-card familiar">Firebase</div>
        <div className="tech-card familiar">Docker</div>
        <div className="tech-card familiar">AWS Basics</div>
        <div className="tech-card familiar">WebSockets</div>
      </div>
    </section>
  );
}

export default TechStack;
