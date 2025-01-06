import  C from './assets/cc.svg';
import  OS from './assets/os.svg';
import  PY from './assets/py.svg';
import  Math from './assets/mathh.svg';


export default function Ecesem7(){

       return (
              <div className='sem1-container'>
                                          <h1>2nd Sem MCA</h1>
                                         <div className='sem1-header'>
                                                 
                                               <div className='sem1'>
                                                    <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '20px'}}>C Programming </h1>
                                                        <img src={C} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href=""> c++ Notes</a>
                                                      <a href="">Problem</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                   
                                               </div>     
                                                  
                                               <div className='sem1'>
                                               <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '20px'}}> Operating System</h1>
                                                        <img src={OS} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href=""> OS Notes</a>
                                                      <a href="">Notes-2</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                      <a href="">Question paper</a>
                                                   
                                               </div>     
                                                
                                                     
                                         </div>
                       
                       
                                             
                                         <div className='sem1-header'>
                                                 
                                                 <div className='sem1'>
                                                      <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}>Python </h1>
                                                          <img src={PY} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href=""> Python Notes</a>
                                                        <a href="">Problem</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                     
                                                 </div>     
                                                    
                                                 <div className='sem1'>
                                                 <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}>Math</h1>
                                                          <img src={Math} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href=""> Math Notes</a>
                                                        <a href="">Notes-2</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                        <a href="">Question paper</a>
                                                     
                                                 </div>     
                                                  
                                                       
                                           </div>
                         
                                         </div>
                                         
                                       
                       
       );
}