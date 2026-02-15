import ieeeImg from "../assets/ieee.jpg";

function Publications() {
  return (
    <section aria-label="Publications Section">
      <h2>Research & Publications</h2>

      <div className="container">
        <div className="card">

          <img src={ieeeImg} alt="IEEE Conference Publication" className="project-image" />

          <h3>
            Estimating the Driving Range of Electric Vehicles 
            in Real-Time Using a Fuzzy Logic Classifier
          </h3>

          <p>
            IEEE Conference publication presenting a real-time EV range 
            estimation model using adaptive fuzzy logic systems.
          </p>

          <a
            href="https://share.google/RVsumgRzlKdpxAyxT"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on IEEE Xplore
          </a>
        </div>
      </div>
    </section>
  );
}

export default Publications;
