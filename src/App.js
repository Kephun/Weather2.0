import './App.css';
import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import Present from './components/Present';
import Weekly from './components/Weekly';



function App() {

  async function displayInfo() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=155dcdb4ca7fd9235a73dff559981991', {mode: 'cors'});
    const data = await response.json();
    return data;
  }

  const [location, setLocation] = useState('London');

  const changeLocation = (e) => {
    e.preventDefault();
    setLocation(document.getElementById('location').value);
  }

  displayInfo();

  return (
    <div className="App">
      <div className='App_display'>
        <Location location={location}/>
        <Present />
        <Weekly />
      </div>
      <form onSubmit={changeLocation}>
        <input id='location'/>
      </form>
    </div>
  );
}

export default App;
