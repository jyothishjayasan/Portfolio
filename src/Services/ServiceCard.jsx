import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";

const ServiceCard = ({title,description,icon}) => {

  return (
    <div className="bg-slate-700 text-center p-3 rounded-md hover:-translate-y-4  duration-200">
      <div className="flex justify-center text-[40px]">
        <div className=" bg-[#1e293b] rounded-full p-3 text-slate-500 border-2 border-slate-500">
          {icon}
        </div>
      </div>
      <div className="text-white">
        <h1 className="text-[25px]">{title}</h1>
      </div>
      <div className="text-slate-400">
        <p className="max-w-sm text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
