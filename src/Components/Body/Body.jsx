import React from "react";
import Footer from '../Footer/Footer'
import Bodycss from "./Body.module.css";
import Marahel from "./Marahel/Marahel";
import final from "../../pic/Final photo.png";
import seo from "../../pic/seo.png";
import mohtava from "../../pic/mohtava.png";
import ui from "../../pic/ux ui.png";
import trahi from "../../pic/Web design.png";
import Baner from "./Baner/Baner";
import Header from '../Header/Header'
const Body = () => {
  return (
    <>
    <Header/>
      <div id={Bodycss.div1}>
        <h1>به اُیک خوش آمدید</h1>
        <div className={Bodycss.contaner}>
          <div className={Bodycss.text}>
            <p>
              با ما رتبه یک گوگل شوید!! گروه برنامه نویسی اُ یک با ارائه متناسب
              قیمت و کیفیت در بسیاری از خدمات در خدمت مشتریان است. ما با استفاده
              از بروز ترین متد ها به بررسی سایت شما میپردازیم و در عرض چند ماه
              با استاندارد های سئو سایت شما رو به رتبه اول گوگل تبدیل میکنیم .
              نگران نباشید اگر کسب و کار خود را اینترنتی نکرده اید ! گروه طراحی
              سایت اُ یک با استفاده از استاندارد های به روز طراحی و برنامه نویسی
              ۰ تا ۱۰۰ سایت شمارو با بالاترین سرعت طراحی می‌کنند.
            </p>
          </div>
          <div className={Bodycss.img}>
            <img src={final}></img>
          </div>
        </div>
        <h3>خدمات ما</h3>
        <div className={Bodycss.five}>
          <div id={Bodycss.all} className={Bodycss.one}>
            <p>سئو</p>
            <img src={seo}></img>
          </div>
          <div id={Bodycss.all} className={Bodycss.two}>
            <p>طراحی سایت</p>
            <img src={trahi}></img>
          </div>
          <div id={Bodycss.all} className={Bodycss.three}>
            <p>محتوا نویسی</p>
            <img src={mohtava}></img>
          </div>
          <div id={Bodycss.all} className={Bodycss.four}>
            <p>Ui-Ux</p>
            <img src={ui}></img>
          </div>
        </div>
        <Baner />
        <Marahel/>
        <Footer/>
      </div>

      
    </>
  );
};

export default Body;

{
  /*         <div>
<p className={Bodycss.text}>
          با ما رتبه یک گوگل شوید!! گروه برنامه نویسی اُ یک با ارائه متناسب قیمت
          و کیفیت در بسیاری از خدمات در خدمت مشتریان است. ما با استفاده از بروز
          ترین متد ها به بررسی سایت شما میپردازیم و در عرض چند ماه با استاندارد
          های سئو سایت شما رو به رتبه اول گوگل تبدیل میکنیم . نگران نباشید اگر
          کسب و کار خود را اینترنتی نکرده اید ! گروه طراحی سایت اُ یک با استفاده
          از استاندارد های به روز طراحی و برنامه نویسی ۰ تا ۱۰۰ سایت شمارو با
          بالاترین سرعت طراحی می‌کنند.
        </p>
</div> */
}
