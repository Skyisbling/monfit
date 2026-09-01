import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="site">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <span>মন</span>FIT
        </div>

        {/* CENTER NAVIGATION */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT-SIDE ACTIONS */}
        <div className="nav-actions">
  <Link to="/register" className="nav-btn">
    Join Monfit →
  </Link>

  <Link to="/login" className="login-link">
    Login
  </Link>
</div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-image">
            <img
              src="/monfit-hero.jpg"
              alt="Monfit fitness journey"
            />
          </div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">
              FITNESS • DISCIPLINE • LIFESTYLE
            </p>

            <h1>
              BUILD THE
              <br />
              <span>STRONGER YOU.</span>
            </h1>

            <p className="hero-text">
              Training, nutrition and discipline designed to help
              you become the best version of yourself.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-btn">
                Start Your Journey →
              </Link>

              <a href="#programs" className="outline-btn">
                Explore Programs
              </a>
            </div>
          </div>

          <div className="hero-tag">
            <strong>MONFIT</strong>
            <span>YOUR FITNESS JOURNEY</span>
          </div>
        </section>

        {/* INTRO / ABOUT */}
        <section className="intro" id="about">
  <img
    className="intro-image"
    src="/monfit-second.jpg"
    alt="Monfit training"
  />

  <div className="intro-overlay" />

  <div className="intro-content">
    <p className="eyebrow">THE MONFIT PHILOSOPHY</p>

    <h2>
      Fitness isn't
      <br />
      <span>just a look.</span>
    </h2>

    <div className="intro-text">
      <p>
        It's about becoming stronger, more confident and
        more disciplined every single day.
      </p>

      <p>
        Monfit brings training, nutrition and lifestyle
        together into one simple system.
      </p>

      <button className="text-btn">
        Discover Monfit →
      </button>
    </div>
  </div>
</section>

        {/* STATS */}
        <section className="stats">
          <div>
            <strong>01</strong>
            <span>TRAIN</span>
          </div>

          <div>
            <strong>02</strong>
            <span>NOURISH</span>
          </div>

          <div>
            <strong>03</strong>
            <span>TRANSFORM</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>REPEAT</span>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="programs" id="programs">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">
                WHAT WE DO
              </p>

              <h2>Choose your goal.</h2>
            </div>

            <p>
              A simple approach to training and nutrition,
              built around your goals.
            </p>
          </div>

          <div className="program-grid">
            <article>
              <span>01</span>

              <h3>Fat Loss</h3>

              <p>
                Build sustainable habits, improve your fitness
                and get leaner without extreme approaches.
              </p>

              <button>Explore →</button>
            </article>

            <article>
              <span>02</span>

              <h3>Muscle & Strength</h3>

              <p>
                Structured training designed to help you
                build strength and muscle.
              </p>

              <button>Explore →</button>
            </article>

            <article>
              <span>03</span>

              <h3>Complete Fitness</h3>

              <p>
                Training, nutrition and lifestyle combined
                into one complete fitness system.
              </p>

              <button>Explore →</button>
            </article>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section className="cta" id="contact">
          <p className="eyebrow">
            YOUR NEXT CHAPTER
          </p>

          <h2>
            READY TO
            <br />
            <span>LEVEL UP?</span>
          </h2>

          <Link to="/register" className="primary-btn">
            Join Monfit →
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="brand">
          <span>মন</span>FIT
        </div>

        <p>Train hard. Live better.</p>

        <small>
          © 2026 Monfit. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default Home;