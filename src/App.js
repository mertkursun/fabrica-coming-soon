import React from 'react';
import Countdown from './components/Countdown';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* YouTube Arka Plan Videosu */}
      <div className="video-background">
      <iframe
          src="https://www.youtube.com/embed/54fW4sl0kjk?autoplay=1&loop=1&mute=1&playlist=54fW4sl0kjk&controls=0&showinfo=0&rel=0&modestbranding=1"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
       
      </div>
      <div id="text">
      <Countdown 
        targetDate="2024-12-31T23:59:59" 
      />
      </div>
      </div>
  );
}

export default App;
