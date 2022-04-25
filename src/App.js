import './App.css';
import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import Present from './components/Present';
import Weekly from './components/Weekly';



function App() {

  const [location, setLocation] = useState('London');
  const [locationData, requestLocation] = useState([]);

  const changeLocation = (e) => {
    e.preventDefault();
    setLocation(document.getElementById('location').value);
  }

  useEffect(()=>{
    displayInfo(location);
    console.log('test')
  }, [locationData]);

  const displayInfo = async (location) => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=155dcdb4ca7fd9235a73dff559981991', {mode: 'cors'});
    const data = await response.json();
    requestLocation(data);
    console.log(data)
  }

  return (
    <div className="App">
      <div className='App_display'>
        <Location data={locationData}/>
        <Present data={locationData}/>
        <Weekly data={locationData}/>
      </div>
      <form onSubmit={changeLocation}>
        <input id='location'/>
      </form>
    </div>
  );
}

export default App;
