import React, { useEffect, useState } from 'react'
import { getRequest } from '@/api/api';
import Designp1 from '@/components/designs/page.js'
import Designs from '@/components/DesignDetails'

const DesignDetailPage = ({id}) => {
    const [design, setdesign] = useState();
    

      const fetchDesign= async () => {
        try {
          const response = await getRequest(`api/design/getdesign/${id}`);
          console.log("Response:", response);
          setdesign(response);
        } catch (error) {
          console.error('Error fetching design data:', error);
        }
      }
      useEffect(() => {
        fetchDesign();
      }, []);
      

  return design ? (
    <div>
        < Designp1 designData={design} />
     <Designs designData={design} />
     </div>
  ):<></>
}

export default DesignDetailPage