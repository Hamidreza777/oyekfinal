import React from "react";
import Aboutecss from "../About/About.module.css";
import artin from "../../pic/artin.jpg";
import qazal from '../../pic/q.jpg';
import aa from '../../pic/arshiya.JPG';
import m from '../../pic/m.jpg';
import { TbBrandTelegram } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
   <div className={Aboutecss.body}>



   <div id={Aboutecss.contaner}>
        <div id={Aboutecss.div2}>
          <h1 id={Aboutecss.hh}>اعضای تیم اُیک</h1>
          <div id={Aboutecss.textb}>
            <b>
              اُیک توانسته با گرد هم آوری افراد متخصص در زمنیه طراحی سایت و سئو
              خدمات جامع و کاملی را با بهترین کیفیت به شما ارائه دهد.
            </b>
          </div>
        </div>
        <div id={Aboutecss.div3}>
          <div className={Aboutecss.div4}>
            <div id={Aboutecss.artin}>
              <img src={artin} alt="" />
              <b>
                مصطفی ملک زاد
                <br></br>
                مدیر بخش web
              </b>
            </div>
            <div id={Aboutecss.artin1}>
              <b>طراح و برنامه نویس وب</b>
            </div>
            <div id={Aboutecss.artin2}>
              <a id={Aboutecss.tell} href="">
                <TbBrandTelegram />
              </a>
              <a href="">
                <CgMail />
              </a>
            </div>
          </div>
          <div className={Aboutecss.div4}>
            <div id={Aboutecss.artin}>
              <img src={qazal} alt="" />
              <b>
                 غزل مرشدی
                <br></br>
                دیجیتال مارکتینگ
              </b>
            </div>
            <div id={Aboutecss.artin1}>
              <b>دیجیتال مارکتینگ</b>
            </div>
            <div id={Aboutecss.artin2}>
              <a id={Aboutecss.tell} href="">
                <TbBrandTelegram />
              </a>
              <a href="">
                <CgMail />
              </a>
            </div>
          </div>
          <div className={Aboutecss.div4}>
            <div id={Aboutecss.artin}>
              <img src={m} alt="" />
              <b>
                فرشته محمدی
                <br></br>
                مدیر بخش تولید محتوا
              </b>
            </div>
            <div id={Aboutecss.artin1}>
                مدیر بخش تولید محتوا
              <b> </b>
            </div>
            <div id={Aboutecss.artin2}>
              <a id={Aboutecss.tell} href="">
                <TbBrandTelegram />
              </a>
              <a href="">
                <CgMail />
              </a>
            </div>
          </div>
          <div className={Aboutecss.div4}>
            <div id={Aboutecss.artin}>
              <img src={aa} alt="" />
              <b>
                ارشیا رضایی
                <br></br>
                برنامه نویس ارشد
              </b>
            </div>
            <div id={Aboutecss.artin1}>
              <b> برنامه نویس </b>
            </div>
            <div id={Aboutecss.artin2}>
              <a id={Aboutecss.tell} href="">
                <TbBrandTelegram />
              </a>
              <a href="">
                <CgMail />
              </a>
            </div>
          </div>
        </div>
   

      </div>
     
      <div  id={Aboutecss.ff}>

      <Footer/>
     
    </div>
    



   </div>
    </>
  );
};

export default About;
