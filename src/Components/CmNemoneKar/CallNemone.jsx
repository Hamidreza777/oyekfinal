import React from 'react'
import ReactDOM from 'react-dom'

import './CallNemone.css';
import NemoneItem from './BodyNemone/Nemone';
import NemoneFooter from './FooterNemone/NemoneFot';
import Footer from '../Footer/Footer';

const AllCodeNemone = () =>{
    return(
        <>
        <NemoneItem/>
        <NemoneFooter/>
        <Footer/>
        </>
    )
};
export default AllCodeNemone