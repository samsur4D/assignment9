import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [venue, setVenue] = useState([]);

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setVenue(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    
    const idToFind = parseInt(id);

    
    const singleData = venue.find(entry => entry.id === idToFind);

    console.log(singleData);
    
    return (
        <div>
            {singleData && (
                <div>
                    
                    {/* ------------ */}
                    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={singleData.image} alt="" className="container mx-auto h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-bold sm:text-4xl mt-20">{singleData.estate_title}</a>
                <p className='text-xl bg-gray-300 px-4 py-2 rounded-3xl'>Description :{singleData.description}</p>
				<p className='text-xl'>Status :{singleData.status}</p>
				<p className='text-xl'>Area :{singleData.area}</p>
				<p className='text-xl'>Location :{singleData.location}</p>
				<p className='text-xl'>Price:{singleData.price}</p>
				<p className='text-xl'>Facilities : {singleData.facilities[0]},{singleData.facilities[1]},{singleData.facilities[2]}</p>
			</div>
			<div className="dark:text-gray-800">
				<NavLink to="/" className="bg-blue-500 px-5 py-2 rounded-2xl font-bold text-white">Back To Home</NavLink>
			</div>
		</div>
	</div>
</div>
                    {/* -------------- */}
                </div>
            )}
        </div>
    );
};

export default Details;
