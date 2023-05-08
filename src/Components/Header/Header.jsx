import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../pic/logo.png";
import Headercss from "../Header/Header.module.css";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav
        id={Headercss.main}
        class="bg-white border-gray-200 dark:bg-gray-900"
      >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   


        <a href="https://www.oyek.net/" class="flex items-center">
            <img
              id={Headercss.logo}
              src={logo}
              class="h-8 mr-3"
              alt="گروه نرم افزار ایک"
            />
          </a>



        <div id={Headercss.call}>
            <FiPhoneCall id={Headercss.facall}/>
            <a id={Headercss.phone} href="tel:09220136476">0922-0136476</a>
          </div>




<nav  className={Headercss.menu}>
  <input type="checkbox" href="#"  className={Headercss.menuopen} name="menu-open" id="menu-open"/>
  <label  className={Headercss.menuopenbutton} for="menu-open">
    <span className={`${Headercss.hamburger} ${Headercss.hamburger1}`}></span>
    <span className={`${Headercss.hamburger} ${Headercss.hamburger2}`}></span>
    <span className={`${Headercss.hamburger} ${Headercss.hamburger3}`}></span>
  </label>
  
  <a href="#" className={`${Headercss.menuitem}`}> salam</a>
  <a href="#" className={`${Headercss.menuitem}`}> salam </a>
  <a href="#" className={`${Headercss.menuitem}`}> salam </a>
  <a href="#" className={`${Headercss.menuitem}`}>salam  </a>
  <a href="#" className={`${Headercss.menuitem}`}> salam </a>

</nav>


<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="shadowed-goo">
          
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feBlend in2="shadow" in="goo" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
</svg>












         

{/* 
          <button
            id={Headercss.menu}
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            kalaria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              id={Headercss.menu}
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              id={Headercss.ul}
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <Link
                  to="/"
                  id={Headercss.home}
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  خانه
                </Link>
              </li>

              <Link
                id={Headercss.hh}
                to="/Cv"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                نمونه کار
              </Link>

              <li>
                <Link
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  to="/About"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  to="/Call"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  آموزش برنامه نویسی
                </Link>
              </li>
              <li>
                <a id={Headercss.moshaver} href="tel:09220136476">
                  {" "}
                  مشاوره تلفنی
                </a>
              </li>
            </ul>
          </div>
 */}




















































  

     


        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
