import React, { useState } from 'react';
import Logo from "../assets/treshteam_logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import { Menu } from 'lucide-react';
import { FaHandHoldingMedical } from 'react-icons/fa6';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)
  const pages = [{name: "Home", path: "/"}, {name: "Services", path: "/services"}, {name: "Projects", path: "/projects"}, {name: "About us", path: "/about-us"}]
  const handleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="relative flex items-center justify-between px-7 md:px-16 py-3">
      <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <ul className="flex items-center justify-between w-full">
        <li className="flex items-center Logo space-x-1">
          <img src={Logo} className="w-[40px] md:h-[50px] h-[40px] md:h-[50px]" alt="" />
          <h1 className="text-md md:text-xl font-semibold uppercase">Team Tresh</h1>
        </li>
        <li>
        <div onClick={handleMenu}>
          <Menu/>
        </div>
        </li>
        </ul>
        <div className="hidden w-full md:block md:w-auto">
        {menuOpen && (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700}>
          {pages.map((page, index) => (
        <li key={index} className="rounded-[30px] overflow-hidden p-1">
          <Link className=`${
               location.pathname === "/" ? "mama" : ""
          } block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent` to={page.path}>
            {page.name}
          </Link>
        </li>
          ))}
        </ul>
      )}
      </div>
        
      </ul>
      
      <ul className="hidden md:flex items-center md:space-x-10 text-lg font-medium">
        <li className="rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/">
            Home
            <div
              className={`${
               location.pathname === "/" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/services">
            Services
            <div
              className={`${
                location.pathname === "/services" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/projects">
            Projects
            <div
              className={`${
                location.pathname === "/projects" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" rounded-[30px] overflow-hidden p-1">
          <Link className="relative group" to="/about-us">
            About us
            <div
              className={`${
                location.pathname === "/about-us" ? "mama" : ""
              } absolute w-full h-0.5 transition-all duration-300`}
            ></div>
          </Link>
        </li>
        <li className=" md:hidden rounded-[30px] overflow-hidden p-1">
          <Button
        className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
        onClick={() => navigate('/contact-us')}>Contact Us</Button>
        </li>
      </ul>
      
      {/* <button className="bg-primary text-white rounded-3xl py-2.5 px-5">
        Contact Us
      </button> */}
      <Button
        className="hidden md:inline-block shadow-md bg-[#1d4ed8] text-white text-sm md:text-md py-2.5 px-5 rounded-[30px]"
        onClick={() => navigate('/contact-us')}>Contact Us</Button>
    </div>
  );
};

export default NavBar;
