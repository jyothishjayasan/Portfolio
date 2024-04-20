import React from "react";
import project1 from '../assets/projects/Screenshot 2024-04-19 164321.png'
import project2 from '../assets/projects/Screenshot 2024-04-19 164343.png'
import project3 from '../assets/projects/Screenshot 2024-04-19 164655.png'
import project4 from '../assets/projects/Screenshot 2024-04-19 164715.png'

const Work = () => {
  return (
    <div className="yy-6 max-w-[1200px] mx-auto  " id="projects">
      
        
        
            <h1 className="text-[50px] text-[#facc15] text-center mt-5">
              My Projects
            </h1>
            
          
        
      
      <div className="grid grid-cols-1 grid-col-span-2 gap-4 sm:grid-cols-2 md:gap-6 xl:gap-8 mt-8 max-sm:p-10 max-sm:gap-6 ">
        <div className="overflow-hidden">
        <img src={project1} loading="lazy" className="inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110 " alt="" />
        </div>
        <div className="overflow-hidden">
        <img src={project2} loading="lazy" className="inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110 " alt="" />
        </div>
        <div className="overflow-hidden">
        <img src={project3} loading="lazy" className="inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110 " alt="" />
        </div>
        <div className="overflow-hidden">
        <img src={project4} loading="lazy" className="inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110 " alt="" />

        </div>
      
      </div>
    </div>
  );
};

export default Work;
