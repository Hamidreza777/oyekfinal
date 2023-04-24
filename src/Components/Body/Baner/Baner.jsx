import React from "react";
import Banercss from './Baner.module.css';
import about from '../../../pic/about us.png'
const Baner = () => {
  return (
  <>
  <h2>درباره ما</h2>
<div className={Banercss.baner}>
 <div className={Banercss.matn}>
<p><span>که هستیم؟</span>
<br></br><br></br><br></br>
امروزه بیش تر کسب و کار ها اینترنتی شده است اگر شما همچنان تردید دارید به راه اندازی کسب و کار اینترنتی گروه پشتیبانی اُ یک درخدمت شما است تا بهترین راهنمایی را به شما انجام دهد . گروه اُ یک ۰ تا ۱۰۰ سایت شمارو (پشتیبانی ، طراحی سایت ، سئو سایت ، ui ux سایت و ...) انجام می‌دهد و همچنین با داشتن نمونه کار های متعدد باعث رضایت بسیاری از مراجعه کنندگان بوده است.</p>

</div> 
<div className={Banercss.aks}>

<img src={about}></img>
</div>
 
</div>
  
  </>
  );
};

export default Baner;
