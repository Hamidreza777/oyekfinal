import React from 'react'
import ReactDOM from 'react-dom'

import '../Footer/Footer.css';
import LogoOyek from '../Pic/logo-oyek.png';

const FooterItem = () =>{
    return(
        <>
        <footer>
        <section id='section-footer-item'>
            <div className='div-link'>
                <p className='p-1'>لینک‌های مهم</p>
                <a href="">درباره ما</a>
                <a href="">تماس با ما</a>
                <a href="">سولات رایج</a>
            </div>

            <div className='div-darbare-ma'>
                <p className='p-about'>درباره اُیک</p>
                <p className='p-matn'> 
                   سازمان علمی و آموزشی فرادرس، قدیمی‌ترین
                   و بزرگ‌ترین پلتفرم آموزش آنلاین ایران است که
                   طی بیش از یک دهه فعالیت خود، بالغ بر ۲۱,۰۰۰ 
                   ساعت آموزش آنلاین، در قالب بیش از
                   ۵,۷۰۰ عنوان آموزشی علمی، مهارتی و کاربردی، منتشر کرده‌است
                   <button id='btn-bishtar'>مشاهده بیشتر</button>
                </p>
            </div>

            <div className='div-ozviyat'>
                <p className='p-ozviyat'>عضویت در تیم اُیک</p> 
            </div> 

            <div className='div-btn-ozviyat'>
                <input className='input' type="text" placeholder='آدرس ایمیل'/>
                <button id='btn-sabtnam'>ثبت نام</button>
            </div>

            <div className='div-loc'>
                <p className='p-oyek'>اُیک</p>
                <p className='adress'>مهرشهر کیان مهر خیابان 111 </p>
                <img className='logo-oyek' src={LogoOyek}/>
            </div>
        </section>

        {/* media  */}

        <div className='div-ozviyat-media'>
           <p className='p-ozviyat'>عضویت در تیم اُیک</p> 
        </div>
        <div className='div-btn-ozviyat-media'>
           <input className='input' type="text" placeholder='آدرس ایمیل'/>
           <button id='btn-sabtnam'>ثبت نام</button>
        </div>
        <div className='div-loc-media'>
            <p className='p-oyek'>اُیک</p>
            <p className='adress'>مهرشهر کیان مهر خیابان 111 </p>
            <img className='logo-oyek' src={LogoOyek}/>
        </div>
        </footer>
        </>
    )
};
export default FooterItem;