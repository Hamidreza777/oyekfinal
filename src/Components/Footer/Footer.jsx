import React from "react";
import { BsInstagram } from "react-icons/bs";
import Footercss from "../Footer/Footer.module.css";
import { TbBrandTelegram } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import { AiFillLinkedin } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer
        id={Footercss.footer}
        class="bg-white rounded-lg shadow m-4 dark:bg-gray-800"
      >
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="https://www.oyek.net/" class="hover:underline">
              .تمامی حقوق ای سایت مـتعلق به شرکت اُیک می باشد
            </a>
            گروه نرم افزاری اُیک
          </span>
          <ul
            id={Footercss.ulli}
            class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
          >
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                <BsInstagram id={Footercss.insta} />
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                <TbBrandTelegram id={Footercss.telegram} />
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                <CgMail id={Footercss.gmail} />
              </a>
            </li>
            {/* <li>
              <a href="#" class="hover:underline">
              <BsInstagram />
              </a>
             
            </li> */}
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                <AiFillLinkedin id={Footercss.link} />
              </a>
            </li>
          </ul>
          <div className={Footercss.linkb}>
            <Link to="/">خانه</Link>
            <Link to="/Cv">نمونه کار</Link>
            <Link to="/About">درباره ما</Link>
            <Link to="/Call">آموزش برنامه نویسی</Link>
            <a href="tel:09220136476">مشاوره تلفنی</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
