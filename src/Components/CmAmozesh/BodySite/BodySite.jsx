import React from 'react'
import ReactDOM from 'react-dom'

import '../BodySite/BodySite.css';
import Photo1 from '../Pic/fvrprg101-svg.svg';
import Photo2 from '../Pic/programming.svg.svg';

const ItemBodySite = () =>{
    return(
        <>
        <section id='section-media1'>
           <div className='div-photo'>
            <img className='img-amozesh' src={Photo1}/>
           </div>

           <section id='section-tozihat'>
            <div className='div-amozesh-barname'>
                <h1>مجموعه آموزش برنامه‌نویسی</h1>
            </div>
            <div className='div-modat-zaman'>
                <p className='p-modat-zaman'>مدت زمان آموز‌ش‌های این صفحه:۶۱۸ ساعت</p>
                <p className='p-amozesh'>تعداد آموز‌ش‌های این صفحه:۱۰۱ عنوان آموزشی</p>
            </div>
           </section>
        </section>

        <div className='div-matn'>
            <p className='matn'>
             بدون شک، برنامه نویسی یکی از مهم‌ترین 
             مهارت‌هایی است که امروزه
             نه تنها برای فارغ التحصیلان
             و دانشجویان رشته مهندسی کامپیوتر، بلکه برای سایر رشته‌ها و زمینه‌ها نیز به شکل ضروری،
              مورد نیاز است. هر ساله، بر تعداد 
             موقعیت‌های شغلی که مرتبط با برنامه‌نویسی هستند و یا پیش‌نیاز اصلی آن‌ها
              برنامه‌نویسی است، افزوده می‌شود. از طرفی، بخشی جدا نشدنی از فرایند
              تحقیق و پژوهش در اکثر رشته‌های دانشگاهی امروزی، کار با کامپیوتر 
             و توانایی پیاده‌سازی ایده‌ها و الگوریتم‌ها در قالب برنامه‌های کامپیوتری
              است. قطعا در این مسیر، دانشجویان نیازمند یادگیری
              و کسب مهارت‌های برنامه‌نویسی هستند.
            </p>
        </div>

        <div className='div-amozesh-oyek'>
            <p className='p1'>
                با آموزش‌های برنامه نویسی اُیک
                برنامه‌نویسی را یک بار و برای
                همیشه یاد بگیرید.
            </p>
            <p className='p2'>
              همان طور که تا کنون هزاران نفر
              از مخاطبین اُیک توانسته‌اند
              این کار را انجام دهند.
            </p>
        </div>

        <section id='section-doreha'>
            <div className='div-dore-html'>
                <img className='img-dore-html' src={Photo2}/>
                <p className='p-html'>آموزش دوره مقدماتی برنامه نویسی</p>
                <div className='div-daneshjoyan'>
                    <p className='p-tedad'>تعداد دانشجویان: ۹۹,۰۳۰</p>
                    <p className='p-modares'>مدرس:استاد سلطانی</p>
                    <p className='p-zaman'>مدت زمان آموزش: ۲ ساعت و ۳۸ دقیقه</p>
                </div>
                <div className='div-btn'>
                    <button id='btn-html'><p>یادگیری شروع کنید</p></button>
                </div>
            </div>

            <div className='div-dore-react'>
                <img className='img-dore-react' src={Photo2}/>
                <p className='p-react'>آموزش دوره بیشرفته برنامه نویسی</p>
                <div className='div-daneshjoyan'>
                    <p className='p-tedad'>تعداد دانشجویان: ۹۹,۰۳۰</p>
                    <p className='p-modares'>مدرس:استاد سلطانی</p>
                    <p className='p-zaman'>مدت زمان آموزش: ۲ ساعت و ۳۸ دقیقه</p>
                </div>
                <div className='div-btn'>
                    <button id='btn-html'><p>یادگیری شروع کنید</p></button>
                </div>
            </div>

            <div className='div-dore-back-end-mob'>
                <img className='img-dore-back-end' src={Photo2}/>
                <p className='p-back-end'>آموزش پکیج بازار کار 1</p>
                <div className='div-daneshjoyan'>
                    <p className='p-tedad'>تعداد دانشجویان: ۹۹,۰۳۰</p>
                    <p className='p-modares'>مدرس:استاد سلطانی</p>
                    <p className='p-zaman'>مدت زمان آموزش: ۲ ساعت و ۳۸ دقیقه</p>
                </div>
                <div className='div-btn'>
                    <button id='btn-html'><p>یادگیری شروع کنید</p></button>
                </div>
            </div>

            <div className='div-dore-back-end-pish'>
                <img className='img-dore-back-end' src={Photo2}/>
                <p className='p-back-end'>آموزش پکیج بازار کار 2</p>
                <div className='div-daneshjoyan'>
                    <p className='p-tedad'>تعداد دانشجویان: ۹۹,۰۳۰</p>
                    <p className='p-modares'>مدرس:استاد سلطانی</p>
                    <p className='p-zaman'>مدت زمان آموزش: ۲ ساعت و ۳۸ دقیقه</p>
                </div>
                <div className='div-btn'>
                    <button id='btn-html'><p>یادگیری شروع کنید</p></button>
                </div>
            </div>
        </section>
        </>
    )
};
export default ItemBodySite;