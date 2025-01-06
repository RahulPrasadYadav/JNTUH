import  Years1 from './assets/years1.png';
import  Years2 from './assets/years2.png';
import  Years3 from './assets/years3.png';
import  Years4 from './assets/years4.png';
// import { useNavigate } from "react-router-dom";


export default function Mce(){
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
                                <button className='sem'> 1st Sem</button>
                                <button className='sem' > 2nd Sem</button>
                        </div>
                        <div className='years' style={backgroundStyle1} >
                        <h1>2nd Years</h1>
                                <button className='sem'> 1st Sem</button>
                                <button className='sem'> 2nd Sem</button>
                        </div>
                   </div>

                   <div className='years-header'>
                        <div className='years' style={backgroundStyle2}>
                        <h1>3rd Years</h1>
                                <button className='sem'> 1st Sem</button>
                                <button className='sem'> 2nd Sem</button>
                        </div>
                        <div className='years' style={backgroundStyle4}>
                        <h1>4th Years</h1>
                                <button className='sem'> 1st Sem</button>
                                <button className='sem' > 2nd Sem</button>
                        </div>
                   </div>
                      
              </div>
        );
}