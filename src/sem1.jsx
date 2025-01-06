import './sem1.css'

import  C from './assets/mathsem.svg';
import  Ch from './assets/chemistry.svg';
import  PY from './assets/py.svg';
import  Skill from './assets/skill.svg';


export default function Sem1(){
       return (
              <div className='sem1-container'>
                                          <h1>1st Sem CSE</h1>
                                         <div className='sem1-header'>
                                                 
                                               <div className='sem1'>
                                                    <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '15px'}}>Matrices and Calculus</h1>
                                                        <img src={C} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href=""> Notes</a>
                                                      <a href="">Problem</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                   
                                               </div>     
                                                  
                                               <div className='sem1'>
                                               <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '20px'}}> Engineering Chemistry</h1>
                                                        <img src={Ch} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href="">  Notes</a>
                                                      <a href="">Notes-2</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                      <a href="">Question paper</a>
                                                   
                                               </div>     
                                                
                                                     
                                         </div>
                       
                       
                                             
                                         <div className='sem1-header'>
                                                 
                                                 <div className='sem1'>
                                                      <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}>Programming for Problem Solving</h1>
                                                          <img src={PY} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href=""> Python Notes</a>
                                                        <a href="">Problem</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                     
                                                 </div>     
                                                    
                                                 <div className='sem1'>
                                                 <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}> Communication Skills </h1>
                                                          <img src={Skill} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href="">Notes</a>
                                                        <a href="">Notes-2</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                        <a href="">Question paper</a>
                                                     
                                                 </div>     
                                                  
                                                       
                                           </div>
                         
                                         </div>
                                         
                                       
                       
       );
}