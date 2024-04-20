
import React, { useEffect, useState } from 'react'
import { getRequest } from '@/api/api';
import axios from "axios";

const Sponser_Card = () => {
    const [sponserData, setSponserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequest('api/sponser/getsponsers');
                console.log("res", response);
                setSponserData(response);
            } catch (error) {
                console.error('Error fetching sponser data:', error);
                // Handle error (e.g., set an error state)
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <h1 className='txt-grad font-bold text-center text-3xl'>Partners & Sponsers</h1>
            <div className='outer_c'>

                <div className='con' >
                    <div className="slider_1 ">
                        <div className="slide-track bg-slate-800">

                            {sponserData.map(sponsor => (
                                <div className="slide" key={sponsor._id}>
                                    <img src={sponsor.logo} />
                                    <p className='text-center sponser_name mt-1'>{sponsor.name} <br></br> {sponsor.owner}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            {/*
            <div className="slider_2">
                <div className="slide-track">
                    <div className="slide">
                        <img src="https://cdn.neowin.com/forum/uploads/post-58955-1099936083_thumb.jpg"  />
                    </div>
                    <div className="slide">
                        <img src="https://filestore.community.support.microsoft.com/api/images/81f716eb-cb32-42b3-81f8-20023c14b690"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmREInHQpJnd0T-bGHRkn_g_2-APT37CY_g&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6e3SidSG2Wkra7gsP8i_2LnK6RXXt21ReRDBBJprna-gkrJw_giQirDdZ2qZDc1yBQ&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveq7ns6ddoJvJtiZzRgL41RuDw24-6hC3qZG122m3wP3hBgvmhyPVaO2hVUU1SQbLngk&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.neowin.com/forum/uploads/post-58955-1099936083_thumb.jpg"  />
                    </div>
                    <div className="slide">
                        <img src="https://filestore.community.support.microsoft.com/api/images/81f716eb-cb32-42b3-81f8-20023c14b690"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmREInHQpJnd0T-bGHRkn_g_2-APT37CY_g&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6e3SidSG2Wkra7gsP8i_2LnK6RXXt21ReRDBBJprna-gkrJw_giQirDdZ2qZDc1yBQ&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveq7ns6ddoJvJtiZzRgL41RuDw24-6hC3qZG122m3wP3hBgvmhyPVaO2hVUU1SQbLngk&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.neowin.com/forum/uploads/post-58955-1099936083_thumb.jpg"  />
                    </div>
                    <div className="slide">
                        <img src="https://filestore.community.support.microsoft.com/api/images/81f716eb-cb32-42b3-81f8-20023c14b690"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmREInHQpJnd0T-bGHRkn_g_2-APT37CY_g&usqp=CAU"  />
                    </div>
                    <div className="slide">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6e3SidSG2Wkra7gsP8i_2LnK6RXXt21ReRDBBJprna-gkrJw_giQirDdZ2qZDc1yBQ&usqp=CAU"  />
                    </div>
                </div>
            </div>

    */}
        </>
    )
}

export default Sponser_Card
