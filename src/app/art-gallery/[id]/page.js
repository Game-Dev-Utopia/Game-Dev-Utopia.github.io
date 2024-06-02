import React from 'react'

const page = ({params}) => {
    const id=params.id;
    console.log(id);
  return (
    <div>{id}</div>
  )
}

export default page