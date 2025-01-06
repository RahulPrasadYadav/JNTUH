import  C from './assets/cc.svg';
import  OS from './assets/os.svg';
import  PY from './assets/py.svg';
import  Math from './assets/mathh.svg';


export default function Csesem2(){
       return (
              <div className='sem1-container'>
                                          <h1>2nd Sem CSE</h1>
                                         <div className='sem1-header'>
                                                 
                                               <div className='sem1'>
                                                    <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '20px'}}>Digital Electronics </h1>
                                                        <img src={C} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href=""> Digital Electronics Notes</a>
                                                      <a href="">Problem</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                   
                                               </div>     
                                                  
                                               <div className='sem1'>
                                               <div className='sem1-logo'>
                                                      <h1 style={{fontSize: '20px'}}> Data Structures</h1>
                                                        <img src={OS} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                        
                                                    </div>
                                                      <a href=""> Data Structures Notes</a>
                                                      <a href="">Notes-2</a>
                                                      <a href="">Class Notes</a>
                                                      <a href="">PYQ</a>
                                                      <a href="">Question paper</a>
                                                   
                                               </div>     
                                                
                                                     
                                         </div>
                       
                       
                                             
                                         <div className='sem1-header'>
                                                 
                                                 <div className='sem1'>
                                                      <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}>Computer Organization and Architecture </h1>
                                                          <img src={PY} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href=""> Architecture Notes</a>
                                                        <a href="">Problem</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                     
                                                 </div>     
                                                    
                                                 <div className='sem1'>
                                                 <div className='sem1-logo'>
                                                        <h1 style={{fontSize: '20px'}}>Java</h1>
                                                          <img src={Math} alt=""  style={{width:'50px', margin:'10px'}}/>
                                                          
                                                      </div>
                                                        <a href=""> Java Notes</a>
                                                        <a href="">Notes-2</a>
                                                        <a href="">Class Notes</a>
                                                        <a href="">PYQ</a>
                                                        <a href="">Question paper</a>
                                                     
                                                 </div>     
                                                  
                                                       
                                           </div>
                         
                                         </div>
                                         
                                       
                       
       );
}