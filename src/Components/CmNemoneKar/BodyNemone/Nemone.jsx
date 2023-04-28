import React from 'react'
import ReactDOM from 'react-dom'

import '../BodyNemone/Nemone.css';
import Photo1 from '../Pic/yakhchal2.jpg';
import Photo2 from '../Pic/yakhchal1.jpg';
import Photo3 from '../Pic/modelsazi.jpg';
import Photo4 from '../Pic/market.jpg';
import Photo5 from '../Pic/food.jpg';

import Logo1 from '../Pic/logo-sard-karaj.png';
import Logo2 from '../Pic//logo-boran.png';
import Logo3 from '../Pic/logo-model.png';
import Logo4 from '../Pic/logo-market.webp';
import Logo5 from '../Pic/logo-food.jpg';

const NemoneItem = () =>{

    return(
        <>
        <div className='div-first'>
            <button id='btn-hame-nemone'>همه نمونه کارها</button>
            <p className='p-nemone'>نمونه کارهای شرکت اُیک</p>
        </div>

        <section id='section-asli-nemone'>
            <div className='div1'>
                <img className='img-asli' src={Photo1}/>
                <div className='div-logo1'>
                   <img className='logo1' src={Logo1}/>
                </div>
                <p className='p1'>سرد کرج</p>
            </div>

            <div className='div2'>
                <img className='img-asli' src={Photo2}/>
                <div className='div-logo1'>
                   <img className='logo1' src={Logo2}/>
                </div>
                <p className='p1'>بوران سرویس</p>
            </div>

            <div className='div3'>
                <img className='img-asli' src={Photo3}/>
                <div className='div-logo1'>
                   <img className='logo1' src={Logo3}/>
                </div>
                <p className='p1'>مدل سازی</p>
            </div>

            <div className='div4'>
                <img className='img-asli' src={Photo4}/>
                <div className='div-logo1'>
                   <img className='logo1' src={Logo4}/>
                </div>
                <p className='p1'>کاج مارکت</p>
            </div>
            
            <div className='div5'>
                <img className='img-asli' src={Photo5}/>
                <div className='div-logo1'>
                   <img className='logo1' src={Logo5}/>
                </div>
                <p className='p1'>دهکده فود</p>
            </div>
        </section>
        </>
    )
};
export default NemoneItem; 