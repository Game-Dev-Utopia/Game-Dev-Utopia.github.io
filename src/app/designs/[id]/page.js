"use client";
import React from 'react'
import DesignDetailPage from './DesignDetailPage';

const page = ({params}) => {
  const id=params.id;
  console.log(id);
  
  return (
    <div>
      <DesignDetailPage id={id} />
    </div>
  )
}

export default page