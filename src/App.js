import './App.css';
import React, { useEffect, useState } from 'react';
import Location from './components/Location';
import Present from './components/Present';
import Weekly from './components/Weekly';



function App() {

  const [location, setLocation] = useState('London');
  const [data, setData] = useState('London');
  const [disperse, disperseInfo] = useState([]);

  const changeLocation = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }

  const changeData = (e) => {
    e.preventDefault();
    setData(location)
  }

  useEffect(()=>{
    const displayInfo = async (data) => {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+data+'&APPID=155dcdb4ca7fd9235a73dff559981991', {mode: 'cors'});
      const object = await response.json();
      console.log(object)
      disperseInfo(object)
    }

    displayInfo(data)
      .catch(console.log('error'))
  },[data])

  return (
    <div className="App">
      <div className='App_display'>
        <Location data={disperse}/>
        <Present data={disperse}/>
        <Weekly data={disperse}/>
      </div>
      <form onSubmit={changeData}>
        <input onChange={changeLocation} value={location}/>
      </form>
    </div>
  );
}

export default App;
