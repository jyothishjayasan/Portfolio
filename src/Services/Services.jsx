import React from 'react'
import ServiceCard from './ServiceCard'
// import { ServiceData } from '../Data/ServiceData'
// import ServiceData from '../Data/ServiceData'
import ServiceData from '../Data/ServiceData'
const Services = () => {
  return (
   <div className='container 'id='services'>
    <div><h1 className="text-[50px] text-[#facc15] text-center m-5 ">Services</h1></div>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 md:pl-[100px] justify-items-center gap-10 max-sm:px-5' >
       
       {ServiceData.map((item,index)=>(
        <ServiceCard title={item.title} description={item.description} icon={item.icon}  />
       ))}
    </div>
   </div>
  )
}

export default Services