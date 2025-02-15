const LandingPage = () => (
  <div className="landing-page">
    <section className="hero">
      <div className="hero-content">
        <h1>Learn Your Way</h1>
        <p className="hero-subtitle">
          An adaptive learning platform designed for neurodivergent minds
        </p>
        <div className="cta-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Watch Demo</button>
        </div>
      </div>
      <div className="hero-animation">
        {/* Placeholder for animated demo */}
        <div className="demo-placeholder">
          Interactive Demo Coming Soon
        </div>
      </div>
    </section>

    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-icon">🎮</div>
          <h3>Learn Through Play</h3>
          <p>Master coding concepts with our gamified learning system</p>
        </div>
        <div className="step">
          <div className="step-icon">🤖</div>
          <h3>AI-Powered Support</h3>
          <p>Get personalized help exactly when you need it</p>
        </div>
        <div className="step">
          <div className="step-icon">🎯</div>
          <h3>Track Progress</h3>
          <p>Visual progress tracking keeps you motivated</p>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <h2>Student Stories</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"This platform finally made learning programming click for me. The visual roadmap and frequent breaks help me stay focused."</p>
          <div className="testimonial-author">- Alex, ADHD Learner</div>
        </div>
        <div className="testimonial-card">
          <p>"I love how I can learn at my own pace and get instant help when I'm stuck. The gamification keeps me coming back!"</p>
          <div className="testimonial-author">- Sam, Neurodivergent Developer</div>
        </div>
      </div>
    </section>
  </div>
)

export default LandingPage 