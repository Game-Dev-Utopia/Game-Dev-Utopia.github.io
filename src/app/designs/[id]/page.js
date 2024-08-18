import React from 'react'
import DesignDetailPage from './DesignDetailPage';
import { getRequest } from '@/api/api';

export async function generateStaticParams() {
  try {
    const response = await getRequest('/api/design/getdesigns');
    const designs = await response;

    // Map each design to a parameter object
    return designs.map(design => ({
      id: design._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to fetch designs", error);
    return [];
  }
}

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