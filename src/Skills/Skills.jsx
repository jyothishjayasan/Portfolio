import React from "react";

const Skills = () => {
  return (
    <div className=" container p-5" id="skills">
      <div>
        <h1 className="text-[50px] text-[#facc15] text-center mt-5">Skills</h1>
      </div>
      <div className="w-full  flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:p-5">
          <p className="text-white text-[40px] lg:ml-6 max-sm:text-center ">
            All the skills that I have in that field of work are mentioned
          </p>
          <p className="text-slate-400 text-[20px] lg:ml-6 max-sm:text-center  lg:pt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni hic
            rem libero quibusdam nemo ipsa nam cupiditate corrupti eius ex
            incidunt ea unde repellendus doloremque, facilis vel ut laboriosam!
            Neque.lorem Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolorum officiis, ipsam harum qui officia rerum labore
            blanditiis voluptatibus quasi odio iure eum ab mollitia magnam,
            doloribus quas, autem voluptates minima?{" "}
          </p>
        </div>
        <div className="lg:w-1/2 flex flex-col w-full items-center gap-[10px] lg:m-[20px] max-sm:text-center max-sm:flex-wrap max">
           <div className="flex flex-col gap-[10px]">
           <div className="flex justify-between">
           <h1 className="text-white">HTML</h1>
           <h1 className="text-[#facc15]">90%</h1>
           </div>
          <progress
            className="progress progress-warning w-[450px] bg-slate-400  max-sm:w-[350px]"
            value={90 }
            max="100"
          ></progress><br />
           <div className="flex justify-between">
           <h1 className="text-white">CSS</h1>
           <h1 className="text-[#facc15]">80%</h1>
           </div>
          <progress
            className="progress progress-warning w-[450px] bg-slate-400 max-sm:w-[350px]"
            value="80"
            max="100"
          ></progress><br />
           <div className="flex justify-between">
           <h1 className="text-white">Java Script</h1>
           <h1 className="text-[#facc15]">60%</h1>
           </div>

          <progress
            className="progress progress-warning w-[450px] bg-slate-400  max-sm:w-[350px]"
            value="60"
            max="100"
          ></progress><br />
          <div className="flex justify-between">
           <h1 className="text-white">HTML</h1>
           <h1 className="text-[#facc15]">90%</h1>
           </div>
          <progress
            className="progress progress-warning w-[450px] bg-slate-400  max-sm:w-[350px]"
            value="70"
            max="100"
          ></progress><br />
           <div className="flex justify-between">
           <h1 className="text-white">Python</h1>
           <h1 className="text-[#facc15]">50%</h1>
           </div>
          <progress
            className="progress progress-warning w-[450px] bg-slate-400  max-sm:w-[350px] "
            value="50"
            max="100"
          ></progress>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
