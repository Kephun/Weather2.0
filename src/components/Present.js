import React from 'react'

function Present(props) {
  const { data } = props;
  
  return (
    <div>
      {data?.main?.temp}
      {data?.weather?.[0]?.main}
      {data?.weather?.[0]?.description}
    </div>
  )
}

export default Present