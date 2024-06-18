import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get('/api/missions');  // Proxy forwards to http://localhost:5000/api/missions
        setMissions(response.data);
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    fetchMissions();
  }, []);

  return (
    <div>
      <h2>Missions</h2>
      <ul>
        {missions.map((mission) => (
          <li key={mission.id}>
            {mission.name} - {mission.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
