import React from 'react';
import background from '../assets/blue.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="h-screen bg-cover " id='home'>
         <Navbar/>
      <div className='w-screen flex  flex-col h-screen items-center justify-center gap-3 '>
        <h1 className='text-[50px] font-[600] text-center text-white'>Hi, I am <span className='text-[#facc15]'>Jyothish Jayasan</span></h1>
        <TypeAnimation className='text-[bg-primary-color] font-extrabold md:text-[50px] '
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Front-end Dev',
    1000,
    'Web-designer',
    1000,
    'Backend-Dev',
    1000,
  
  ]}
  wrapper='span'
  speed={50}
  style={{ fontSize: '3em' }}
  repeat={Infinity}
/>
       <div className='max-w-[51%] max-sm:hidden'>
       <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolorum libero sequi expedita amet aliquam consectetur eveniet est laborum, veniam maxime officia dolore facere blanditiis consequatur asperiores quas praesentium iure?</p>
       </div>
        <div className='social-icons'>
            <ul className='flex items-center gap-[40px]'>
                <li className='p-2 rounded-full text-white text-[20px] border-2 border-white hover:bg-[#1e293b]' ><FaFacebookF /></li>
                <li className=' p-2 rounded-full text-white text-[20px] border-2 border-white hover:bg-[#1e293b]'><FaInstagram /></li>
                <li className='  p-2 rounded-full text-white text-[20px] border-2 border-white hover:bg-[#1e293b]'><RiGithubLine /></li>
            </ul>

        </div>
      </div>
    </div>
  );
};


export default Home;
