import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="Navbar flex  w-full justify-around text-white mt-[10px] bg-transparent absolute">
      <div className="Name">
        <p className="text-[40px] font-semibold max-sm:hidden">
          Jyothish Jayasan
        </p>
      </div>
      <ul className="nav-menu hidden md:flex items-center gap-[30px] text-[20px] font-semibold max-sm:gap-[12px] max-sm:text-[15px] cursor-pointer">
        <Link activeClass="active" to="home" smooth={true}>
          <li
            onClick={() => setMenu("Home")}
            className={` ${menu === "Home" ? "text-[#facc15]" : ""}`}
          >
            Home
          </li>
        </Link>
        <Link activeClass="active" to="About" smooth={true}>
          <li
            onClick={() => setMenu("About")}
            className={` ${menu === "About" ? "text-[#facc15]" : ""}`}
          >
            About
          </li>
        </Link>
       <Link  activeClass="active" to="services" smooth={true}>
       <li
          onClick={() => setMenu("Services")}
          className={` ${menu === "Services" ? "text-[#facc15]" : ""}`}
        >
          Services
        </li></Link>
        <Link activeClass="active" to="skills" smooth={true}>
          <li
            onClick={() => setMenu("Skills")}
            className={` ${menu === "Skills" ? "text-[#facc15]" : ""}`}
          >
            Skills
          </li>
        </Link>
      <Link activeClass="active" to="projects" smooth={true}>
      <li
          onClick={() => setMenu("Projects")}
          className={` ${menu === "Projects" ? "text-[#facc15]" : ""}`}
        >
          Projects
        </li>
      </Link>
      </ul>

      <p className=" flex items-center gap-[20px] text-[20px] font-semibold text-[#facc15] md:hidden max-sm:hidden">
        <FaPhoneAlt className="  text-[#facc15] " />
        8943240843
      </p>
      <div
        onClick={handleNav}
        className=" fixed md:hidden flex justify-end w-full mr-4 z-50 bg- "
      >
        {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>
      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r  border-r-gray-900 bg-[#1e293b] z-50 "
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl font-bold m-4 text-[#facc15]">Jyothish</h1>
        <ul className="text-2xl m-4 font-bold">
        <Link activeClass="active" to="home" smooth={true}>
            <li className="p-2  hover:bg-[#facc15] hover:text-[#1e293b]">
              Home
            </li>
          </Link>
          <Link activeClass="active" to="About" smooth={true}>
            <li className="p-2  hover:bg-[#facc15] hover:text-[#1e293b]">
              About
            </li>
          </Link>
          <Link activeClass="active" to="services" smooth={true}>
            <li className="p-2  hover:bg-[#facc15] hover:text-[#1e293b]">
              Services
            </li>
          </Link>
          <Link activeClass="active" to="skills" smooth={true}>
            <li className="p-2  hover:bg-[#facc15] hover:text-[#1e293b]">
              Skills
            </li>
          </Link>
          <Link activeClass="active" to="projects" smooth={true}>
            <li className="p-2  hover:bg-[#facc15] hover:text-[#1e293b]">
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
