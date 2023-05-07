import React from "react";
import Marahelcss from "./Marahel.module.css";
import aks1 from "../../../pic/11.png";
import aks2 from "../../../pic/22.png";
import aks3 from "../../../pic/33.png";
const Marahel = () => {
  return (
    <>
      <h3>مراحل طراحی سایت</h3>
      <div className={Marahelcss.desing}>
        <div id={Marahelcss.levels}>
          <img src={aks1}></img>
          <h2>دریافت خلاصه و بریف پروژه</h2>
          <p>
            این یک سند کوتاه یک یا دو صفحه ای است که اهداف سایت : چالش ها ، پیام
            رسانی ، راه حل و سایر جزئیات یک پروژه را مشخص می‌کند همچنین به
            راهنمایی تیم خلاق اُ یک درمورد چه گونگی دستیابی به اهداف پروژه کمک
            می‌کند.
          </p>
        </div>
        <div id={Marahelcss.levels1}>
          <img src={aks2}></img>
          <h2>ارائه نسخه اولیه</h2>
          <p>
            در این مرحله ما نسخه اولیه از مطالب خواسته شده را در اختیار شما قرار
            می‌دهیم تا از روند انجام پروژه مطلع باشید.
          </p>
        </div>
        <div id={Marahelcss.levels2}>
          <img src={aks3}></img>
          <h2>ارائه نسخه نهایی</h2>
          <p>
            بعد از تکمیل پروژه یک فایل تست در اختیار شما قرار می‌گیرد تا به
            بررسی پروژه بپردازید و در صورت مشکل به ما اطلاع بدهید تا تیم اُ یک
            به بررسی مشکل ایجاد شده بپردازد.
          </p>
        </div>
      </div>
    </>
  );
};

export default Marahel;
