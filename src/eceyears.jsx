import  Years1 from './assets/years1.png';
import  Years2 from './assets/years2.png';
import  Years3 from './assets/years3.png';
import  Years4 from './assets/years4.png';
import { useNavigate } from "react-router-dom";


export default function Eceyears(){

           const navigate=useNavigate();
           const handleEcesem1=()=>{
                navigate('/Ecesem1')
                  
           }
           const handleEcesem2=()=>{
                navigate('/Ecesem2')
                  
           }
           const handleEcesem3=()=>{
                navigate('/Ecesem3')
                  
           }
           const handleEcesem4=()=>{
                navigate('/Ecesem4')
                  
           }
           const handleEcesem5=()=>{
                navigate('/Ecesem5')
               
                
           }
           const handleEcesem6=()=>{
                navigate('/Ecesem6')
                  
           }
           const handleEcesem7=()=>{
                navigate('/Ecesem7')
                  
           }
           const handleEcesem8=()=>{
                navigate('/Ecesem8')
                  
           }
  const backgroundStyle = {
        backgroundImage: `url(${Years1})`,
        backgroundSize: "cover", // Adjust the size (e.g., cover, contain)
        backgroundPosition: "center",
         // Full width
      };
      const backgroundStyle1 = {
        backgroundImage: `url(${Years2})`,
        backgroundSize: "cover", // Adjust the size (e.g., cover, contain)
        backgroundPosition: "center",
         // Full width
      };
      const backgroundStyle2 = {
        backgroundImage: `url(${Years2})`,
        backgroundSize: "cover", // Adjust the size (e.g., cover, contain)
        backgroundPosition: "center",
         // Full width
      };
      const backgroundStyle4 = {
        backgroundImage: `url(${Years4})`,
        backgroundSize: "cover", // Adjust the size (e.g., cover, contain)
        backgroundPosition: "center",
         // Full width
      };
        return (
              <div className='years-container'>
                  <h2>Learn and Grow</h2>
                   <div className='years-header'>
                        <div className='years'  style={backgroundStyle}>
                                <h1>1st Years</h1>
                                <button className='sem' onClick={handleEcesem1}> 1st Sem</button>
                                <button className='sem' onClick={handleEcesem2} > 2nd Sem</button>
                        </div>
                        <div className='years' style={backgroundStyle1} >
                        <h1>2nd Years</h1>
                                <button className='sem' onClick={handleEcesem3}> 1st Sem</button>
                                <button className='sem' onClick={handleEcesem4}> 2nd Sem</button>
                        </div>
                   </div>

                   <div className='years-header'>
                        <div className='years' style={backgroundStyle2}>
                        <h1>3rd Years</h1>
                                <button className='sem' onClick={handleEcesem5}> 1st Sem</button>
                                <button className='sem'onClick={handleEcesem6}> 2nd Sem</button>
                        </div>
                        <div className='years' style={backgroundStyle4}>
                        <h1>4th Years</h1>
                                <button className='sem' onClick={handleEcesem7

                                }> 1st Sem</button>
                                <button className='sem'  onClick={handleEcesem8}> 2nd Sem</button>
                        </div>
                   </div>
                      
              </div>
        );
}