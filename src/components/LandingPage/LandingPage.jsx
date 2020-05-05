import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main>
      <div className="landing-page">
        <div className="landing-page__intro">
          <h2>WELCOME TO YES JOBS</h2>
          <p>Your Job Interview Preparation Assitant</p>
        </div>
        <div className="landing-page__link-container">
          <Link to="/flashcards">
            <div className="landing-page__link">Go to Flashcards</div>
          </Link>
          <Link to="/tutorial">
            <div className="landing-page__link">Go to Tutorial</div>
          </Link>
          <Link to="/edit">
            <div className="landing-page__link">Answer Interview Questions</div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
