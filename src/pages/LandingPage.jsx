
const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <header className="header">
        <h1>Healthmate</h1>
        <p>Your trusted companion for health and wellness</p>
      </header>
      <div className="auth-buttons">
        <a href="/signin" className="btn">Sign In</a>
        <a href="/signup" className="btn btn-secondary">Sign Up</a>
      </div>
    </div>
  );
};

export default LandingPage;
