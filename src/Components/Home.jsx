import React, { useEffect } from 'react';
import Slider from './Slider';
import HomeCard from './HomeCard';
import 'animate.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Home Page';
    return () => {
      document.title = 'Title';
    };
  }, []);
    return (
        <div className='container mx-auto '>
            
           
           
            <Slider></Slider>
              <div className='mt-10 mb-10 text-center'>
                
                <h1 className='text-6xl font-bold animate__animated animate__backInRight animate__infinite animate__slow '>Discover Our Teritory</h1>
                <p className='text-2xl animate__animated animate__pulse animate__delay-2s animate__infinite'>Escape into luxury at the ideal Secrets resort destination for you. From pristine coastal getaways to serene island escapes, each property presents <br /> a memorable and unique story while offering a luxurious, all-inclusive, adults-only experience.</p>
              </div>
              
             <HomeCard></HomeCard>
        </div>
    );
};

export default Home;