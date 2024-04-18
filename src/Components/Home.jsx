import React from 'react';
import Slider from './Slider';
import HomeCard from './HomeCard';

const Home = () => {
    return (
        <div className='container mx-auto '>
            
           
           
            <Slider></Slider>
              <div className='mt-10 mb-10 text-center'>
                
                <h1 className='text-3xl font-bold'>Discover Our Teritory</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi, molestias suscipit explicabo alias <br /> minus at dolorem praesentium aliquam quaerat laborum hic .</p>
              </div>
              
             <HomeCard></HomeCard>
        </div>
    );
};

export default Home;