// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React from 'react';
import Publications from './Components/Publications';
import ProfileCard from './Components/ProfileCard';

const App = () => {
    return (
      <div style={{ margin: 50 }}>
        <ProfileCard />
        <Publications />
      </div>
    )
  }

export default App;
