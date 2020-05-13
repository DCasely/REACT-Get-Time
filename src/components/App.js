import React, { useState } from 'react';

export default function App() {
  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState('What Time Is It?');

  function getTime() {
    setTime((currentTime = new Date().toLocaleTimeString()));

    setInterval(getTime, 1000);
  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>{time}</h1>
        </div>
        <button onClick={getTime}>Get Time</button>
      </div>
    </div>
  );
}
