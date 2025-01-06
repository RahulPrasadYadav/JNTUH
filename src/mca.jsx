

import  Years1 from './assets/years1.png';

import  Years2 from './assets/years2.png';
import { useNavigate } from "react-router-dom";

export default function Mca(){

        const navigate = useNavigate();
        const handlemcasem1Click=()=>{
            navigate('/Mcasem')
        }
       const handlemcasem2Click=()=>{
                navigate('/Mcasem2')
            }
            const handleSam3click=()=>{
                navigate('/mcasem3')
            }
            const handleSam4click=()=>{
                navigate('/mcasem4')
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

        return(

            <div className='years-container'>
            <h2>Learn and Grow</h2>
             <div className='years-header'>
                  <div className='years'  style={backgroundStyle}>
                          <h1>1st Years</h1>
                          <button className='sem' onClick={handlemcasem1Click}> 1st Sem</button>
                          <button className='sem' onClick={handlemcasem2Click}> 2nd Sem</button>
                  </div>
                  <div className='years' style={backgroundStyle1} >
                  <h1>2nd Years</h1>
                          <button className='sem' onClick={handleSam3click}> 1st Sem</button>
                          <button className='sem' onClick={handleSam4click}> 2nd Sem</button>
                  </div>
             </div>
             </div>
        );
}