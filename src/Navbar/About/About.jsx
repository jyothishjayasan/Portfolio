import React from "react";

const About = () => {
  return (
    <div className="container "id="About">
      <h1 className="text-[50px] text-[#facc15] text-center mt-5">About me</h1>
      <div className="w-full  flex lg:flex-row flex-col">
        <div className="lg:w-1/2">
          <div className="flex w-full items-center justify-center h-full">
            <img
              className="w-[30rem]"
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-1/2 max-sm:text-center">
          <div className="w-full flex  flex-col h-full p-7 justify-center gap-3">
            <h1 className="text-[40px] text-white">
              Hi There! I'm Jyothish Jayasan
            </h1>
            <h2 className="text-[30px] text-[#facc15]">Django Developer</h2>
            <p className="text-white text-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              nisi omnis quia similique fuga eveniet sit inventore aperiam
              impedit, nobis earum dolor officia alias repellat optio
              exercitationem vel sint. Deleniti!
            </p>
            <div className="md:flex justify-between ">
              <ul className="text-white md:text-[15px] flex flex-col gap-[10px] ">
                <li className="whitespace-pre uppercase ">Birthday :    19-10-2000</li>
                <li className="whitespace-pre uppercase">phone      :    8943240843</li>
                <li className="whitespace-pre ">EMAIL        :  jyothishjayasan40@gmail.com</li>
              </ul>
              <ul className="text-white md:text-[15px] flex flex-col gap-[10px] ">
                <li className="whitespace-pre uppercase">From             :   Vadakara,kerla</li>
                <li className="whitespace-pre uppercase">Language    :  Malayalam,English</li>
                <li className="whitespace-pre uppercase">Freelance    :   Available</li> 
              </ul>
            </div>

            <div className="w-[150px] h-[55px] bg-[#facc15] rounded-[50px] hover:bg-black hover:text-[#facc15] max-sm:flex max-sm:w-full max-sm:items-center">
              <h1 className="flex w-full h-full justify-center items-center cursor-pointer text-[20px] ">
                Download CV
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
