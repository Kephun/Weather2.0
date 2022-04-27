import React from 'react'

function Location(props) {
  const { data } = props

  return (
    <div>
      {data?.name}
    </div>
  )
}

export default Location