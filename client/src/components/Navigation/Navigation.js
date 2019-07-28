import React from 'react';
import Logo from '../Logo/Logo';
import talent from './talent3.jpg'
import Tilt from 'react-tilt'
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
   if (isSignedIn){
       return (
        //    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
           <nav className="dt w-100 border-box pa3 ph5-ns mt3 bg-dark-gray">
               <a className="dtc v-mid mid-gray link dim w-25" style={{ display: 'flex' }} href="#" title="Home">
                       <img src={talent} className="dib w2 h2 br-100" alt="TalentSeekLogo" />
                   <span><h1 className="logo ml2">TalentSeek</h1></span>
                   </a>
                   
                   <div className="dtc v-mid w-75 tr">
                       {/* <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a> */}
                   <a id="a6" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Profile"><img src={talent} className="dib w2 h2 br-100 mr2" alt="TalentSeekLogo" /></a>
                   <a id="a5" onClick={() => onRouteChange('signin')} className="link dim dark-gray f6 f5-ns dib" href="#" title="Logout">Logout</a>
                   </div>
               {/* </nav> */}
               
               
           </nav>
       )
   }else {
       return (
           <nav className="dt w-100 border-box pa3 ph5-ns mt3 bg-dark-gray ">
               <a className="dtc v-mid mid-gray link dim w-25" style={{ display: 'flex' }} href="#" title="Home">
                   <img src={talent} className="dib w2 h2 br-100" alt="TalentSeekLogo" />
                   <span><h1 className="logo ml2">TalentSeek</h1></span>
               </a>
               

               <div className="dtc v-mid w-75 tr">
                   <a id="a1" className="link dim dark-gray  f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
                   <a id="a2" className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">About</a>
                   <a id="a3" onClick={() => onRouteChange('signin')} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Contact">Login</a>
                   <a id="a4" onClick={() => onRouteChange('register')} className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Contact"> Register</a>
               </div>
           </nav>        
           
       )
   }
}
export default Navigation;