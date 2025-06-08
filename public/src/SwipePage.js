import React, { useState } from 'react';
import './SwipePage.css';

const sampleProfiles = [
  {
    id: 1,
    name: 'Ava Nightshade',
    genres: ['Epic Fantasy', 'Series'],
    blurb: 'A prophecy. A runaway princess. A kingdom on the brink of war.'
  },
  {
    id: 2,
    name: 'Jax Tern',
    genres: ['Grimdark', 'Standalone'],
    blurb: 'Mercy is a luxury he can no longer afford in the city of bone.'
  }
];

function SwipePage() {
  const [index, setIndex] = useState(0);

  const handleSwipe = (direction) => {
    console.log(`Swiped ${direction} on`, sampleProfiles[index].name);
    setIndex((prev) => (prev + 1) % sampleProfiles.length);
  };

  const currentProfile = sampleProfiles[index];

  return (
    <div className="swipe-container">
      <div className="card">
        <h2>{currentProfile.name}</h2>
        <p><strong>Genres:</strong> {currentProfile.genres.join(', ')}</p>
        <p><strong>Blurb:</strong> {currentProfile.blurb}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleSwipe('left')}>❌ Pass</button>
        <button onClick={() => handleSwipe('right')}>💖 Interested</button>
      </div>
    </div>
  );
}

export default SwipePage;
