import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const [venue , setVenue] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setVenue(data))
    },[])
    
    return (
     <div className=''>
        {/* <h2>{venue.length}</h2> */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    venue.map((vn)=> ( 
                        <div key={vn.id} className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src={vn.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{vn.estate_title}</h2>
                                <p className="dark:text-gray-800">Status : {vn.status}</p>
                                <p className="dark:text-gray-800">Location : {vn.location}</p>
                               
                            </div>
                            {/* ---------- */}
                            <Link to={`/details/${vn.id}`} href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">View Details</span>
</Link>
                            {/* ------------- */}
                        </div>
                         </div>
                    ) )
                }
        </div>
        
                   {/* ----------- */}
        
                   {/* --------- */}
     </div>
    );
};

export default HomeCard;