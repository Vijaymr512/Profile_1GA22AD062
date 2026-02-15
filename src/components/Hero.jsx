import profilePic from "../assets/profile.jpeg";

function Hero() {
  return (
    <section aria-label="Hero Section">
      <div className="hero-container">
        
        <img
          src={profilePic}
          alt="Vijay M R Professional Portrait"
          className="profile-image"
        />

        <h1>Vijay M R</h1>
        <h2>Gesix GeoAI Intern | AI & Full Stack Developer</h2>

        <p>
          Curious mind. Creative thinker. Problem solver.
          I build intelligent AI systems and scalable web applications 
          that transform complex challenges into impactful digital solutions.
        </p>
      </div>
    </section>
  );
}

export default Hero;
