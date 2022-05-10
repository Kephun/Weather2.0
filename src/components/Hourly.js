import React from 'react';
import './Hourly.css'

function Hourly(props) {
  const { data } = props;
  return (
    <section className='hourly'>
        {data.map((object) => {
          return(
          <section className='hourly_cards' key={object.dt}>
            <p>{object.dt_txt}</p>
            {/* LOGO */}
            <div>{object.main.temp}</div>
            <h2>{object.weather[0].main}</h2>
            <h4>{object.weather[0].description}</h4>
          </section>
        )})}
    </section>
  )
}

export default Hourly