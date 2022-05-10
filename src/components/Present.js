import React from 'react';
import './Present.css'

function Present(props) {
  const { data } = props;
  
  return (
    <section className='present'>
      <div className='present_left'>
        <h1>{data.name}</h1>
        <p>{data?.main?.temp}</p>
      </div>
      <div className='present_right'>
        {/* LOGO */}
        <p>{data?.weather?.[0]?.main}</p>
        {data?.weather?.[0]?.description}
      </div>
    </section>
  )
}

export default Present