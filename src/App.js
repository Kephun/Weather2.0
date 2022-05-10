import './App.css';
import React, { useEffect, useState } from 'react';
import Present from './components/Present';
import Hourly from './components/Hourly';



function App() {

  const [location, setLocation] = useState('London');
  const [data, setData] = useState('London');
  const [disperse_daily, disperseInfo] = useState([]);
  const [general, disperseGeneral] = useState([]);


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
      const name = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+data+'&APPID=155dcdb4ca7fd9235a73dff559981991', {mode: 'cors'});
      const name_data = await name.json();
      const everything = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+name_data.coord.lat+'&lon='+name_data.coord.lon+'&exclude={part}&appid=c221b60b93ea29eb536d2733eeb4d082', {mode:'cors'});
      const everything_data = await everything.json();
      disperseInfo(everything_data.daily);
      disperseGeneral(name_data);
      console.log(everything_data)
      console.log(name_data)
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
        <Present data={general}/>
        <Hourly data={disperse_daily}/>
      </div>
    </div>
  );
}

export default App;
