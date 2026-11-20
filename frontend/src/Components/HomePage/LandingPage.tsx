import React from 'react';
import { useBookGenre } from './BookGenreContext';
import './LandingPage.css';

function LandingPage() {
  const { setGenre } = useBookGenre();

  const handleRomantasyChoice = () => {
    setGenre('romantasy');
  };

  const handleEpicFantasyChoice = () => {
    setGenre('epic-fantasy');
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1>Welcome to Musings, Mythos, Magic</h1>
        <p className="landing-subtitle">What type of stories interest you?</p>
        
        <div className="genre-choices">
          <div className="genre-card romantasy-card" onClick={handleRomantasyChoice}>
            <h2>Romantasy</h2>
            <p>Epic tales woven with romance at their heart. Follow heroes whose greatest battles are fought for love.</p>
            <button className="choice-button">Explore Romantasy</button>
          </div>

          <div className="genre-card epic-fantasy-card" onClick={handleEpicFantasyChoice}>
            <h2>Epic Fantasy</h2>
            <p>Grand narratives of kingdoms, power, and destiny. Immerse yourself in worlds where empires rise and fall.</p>
            <button className="choice-button">Explore Epic Fantasy</button>
          </div>
        </div>

        <p className="landing-footer">You can change your preference anytime by selecting a different genre.</p>
      </div>
    </div>
  );
}

export default LandingPage;
