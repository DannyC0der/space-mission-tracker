/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        axios.get('/api/missions')
            .then(response => setMissions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <h1>Space Mission Tracker</h1>
            <div className="missions">
                {missions.map(mission => (
                    <div key={mission.id} className="mission-card">
                        <img src={mission.img_src} alt={mission.rover.name} />
                        <p>{mission.rover.name} - {mission.camera.full_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;

