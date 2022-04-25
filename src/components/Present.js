import React from 'react'

function Present(props) {
  const { data } = props;

  const array = data.main
  return (
    <div>
      {array.map((elements)=> {
        return <div>{elements}</div>
      })}
    </div>
  )
}

export default Present