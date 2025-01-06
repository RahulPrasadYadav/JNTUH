import './home.css';
import React, { useState } from 'react';
import  Com from './assets/computer.svg';
import  Ai from './assets/ai.svg';
import  El from './assets/el.svg';
import  Ele from './assets/ele.svg';
import  DS from './assets/ds.svg';
import  ME from './assets/me.svg';
import  MBA from './assets/mba.svg';
// import  MCA from './assets/com2.svg';
import  Homee from './assets/home_logo.png';
import { useNavigate } from "react-router-dom";


export default function Home(){


       const navigate = useNavigate();
       const handleCseClick = () => {
         
                navigate('/Cseyears'); 
       }
       const handleEceclick=()=>{
                navigate('/Eceyears')
       }

       const handleEeeclick=()=>{
                navigate('/Eeeyears')
       }

       const handleDsclick=()=>{
              navigate('/Ds')
     }
     const handleMceclick=()=>{
       navigate('/Mce')
}

const handleAiclick=()=>{
       navigate('/Ai')
}

  
     
         
           

  const handlemcaClick=()=>{
          navigate('/Mca')
  }

       return(

                  
             
        <div className='home-contaier'>
                   <div className='home-header'> 
                         <h1>Welcome to JNTUH  Resources</h1>
                   </div>
                <h1 className='all'>All <span> Department</span></h1>
                  <div className='deparment'>
                      <div className='box'>
                             <img src={Com} alt="" />
                               <h3>CSE</h3>
                                <button onClick={handleCseClick}>Explore</button>
                      </div>
                      <div className='box'>
                          <img src={Ai} alt="" />
                             <h3>CSE - AI</h3>
                             <button onClick={handleAiclick}>Explore</button>
                      </div>
                      <div className='box'>
                               <img src={El} alt="" />
                                 <h3>ECE</h3>
                                 <button onClick={handleEceclick}>Explore</button>
                      </div>
                      <div className='box'>
                           <img src={Ele} alt="" />
                             <h3>EEE</h3>
                             <button onClick={handleEceclick}>Explore</button>
                      </div>
                      <div className='box'>
                           <img src={DS} alt="" />
                             <h3>CSE-DS</h3>
                             <button onClick={handleDsclick}>Explore</button>
                      </div>
                      <div className='box'>
                          <img src={ME} alt="" />
                            <h3>MCE</h3>
                            <button onClick={handleMceclick}>Explore</button>
                      </div>
                     
                       
                  

                    
        </div>   

        <div className='deparment'>
                      <div className='box'>
                             {/* <img src={} alt="" /> */}
                               <h3>MCA</h3>
                                <button onClick={handlemcaClick}>Explore</button>
                      </div>
                      <div className='box'>
                          <img src={MBA} alt="" />
                             <h3>MBA</h3>
                             <button>Explore</button>
                      </div>
                      <div className='box'>
                          <img src={MBA} alt="" />
                             <h3>MBA</h3>
                             <button>Explore</button>
                      </div>
                      <div className='box'>
                          <img src={MBA} alt="" />
                             <h3>MBA</h3>
                             <button>Explore</button>
                      </div>
                     
                       
                  

                    
        </div>   
               
        </div>

          
       );
}