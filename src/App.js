import './App.css';
import React, { useEffect, useState } from 'react';
import Present from './components/Present';
import Hourly from './components/Hourly';



function App() {

  const [location, setLocation] = useState('London');
  const [data, setData] = useState('London');
  const [disperse_daily, disperseDaily] = useState([]);
  const [disperse_hourly, dispersehourly] = useState([])

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
      const today = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+data+'&APPID=155dcdb4ca7fd9235a73dff559981991', {mode: 'cors'});
      const today_data = await today.json();
      const hourly = await fetch('http://api.openweathermap.org/data/2.5/forecast?id='+today_data.id+'&appid=155dcdb4ca7fd9235a73dff559981991', {mode:'cors'});
      const hourly_data = await hourly.json();
      disperseDaily(today_data)
      dispersehourly(hourly_data.list)
      console.log(hourly_data)
      console.log(today_data)
    }

    displayInfo(data)
      .catch(console.log('error'))
  },[data])

  return (
    <div className="App">
      <form onSubmit={changeData}>
        <input onChange={changeLocation} value={location}/>
      </form>
      <div className='App_display'>
        <Present data={disperse_daily}/>
        <Hourly data={disperse_hourly}/>
      </div>
    </div>
  );
}

export default App;
