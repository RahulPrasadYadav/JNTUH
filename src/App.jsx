import { useState } from 'react'

import './App.css'
import Navbar from './navbar'
import Home from './home'
import Cseyears from './cse_years';
import Sem1 from './sem1';

import Mca from './mca.jsx';
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import Mcasem from './mcasem.jsx';
import Mc2 from './mcasem2.jsx'
import Mc3 from './mcasem3.jsx'
import Mc4 from './mcasem4.jsx'
import Csesem2 from './cseSem2.jsx';
import Csesem4 from './csesem4.jsx';
import Csesem3 from './csesem3.jsx';
import Csesem5 from './csesem5.jsx';
import Csesem6 from './csesem6.jsx';
import Csesem7 from './csesem7.jsx';
import Csesem8 from './csesem8.jsx';
import Eceyears from './eceyears.jsx';
import Eeeyears from './eeeyears.jsx';
import Ds from './ds.jsx';
import Mce from './mce.jsx';
import Ai from './ai.jsx';
import Aisem1 from './aisem1.jsx';
import Aisem2 from './aisem2.jsx';
import Aisem3 from './aisem3.jsx';
import Aisem4 from './aisem4.jsx';
import Aisem5 from './aisem5.jsx';
import Aisem6 from './aisem6.jsx';
import Aisem7 from './aisem7.jsx';
import Aisem8 from './aisem8.jsx';
import Ecesem1 from './ecesem1.jsx';
import Ecesem2 from './ecesem2.jsx';
import Ecesem3 from './ecesem3.jsx';
import Ecesem4 from './ecesem4.jsx';
import Ecesem5 from './ecesem5.jsx';
import Ecesem6 from './ecesem6.jsx';
import Ecesem7 from './ecesem7.jsx';
import Ecesem8 from './ecesem8.jsx';
import Eeesem1 from './eeesem1.jsx';
import Eeesem2 from './eeesem2.jsx';
import Eeesem3 from './eeesem3.jsx';
import Eeesem4 from './eeesem4.jsx';
import Eeesem5 from './eeesem5.jsx';
import Eeesem6 from './eeesem6.jsx';
import Eeesem7 from './eeesem7.jsx';
import Eeesem8 from './eeesem8.jsx';
import Dssem1 from './dssem1.jsx';
import Dssem2 from './dssem2.jsx';
import Dssem3 from './dssem3.jsx';
import Dssem4 from './dssem4.jsx';
import Dssem5 from './dssem5.jsx';
import Dssem6 from './dssem6.jsx';
import Dssem7 from './dssem7.jsx';
import Dssem8 from './dssem8.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Router> 
      <Navbar/>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/CSEYears" element={<Cseyears />} /> 
        <Route path="/Sem1" element={<Sem1 />} /> 
        <Route path="/cseSem2" element={<Csesem2 />} /> 
        <Route path="/cseSem3" element={<Csesem3 />} /> 
        <Route path="/cseSem4" element={<Csesem4 />} /> 
        <Route path="/cseSem5" element={<Csesem5 />} /> 
        <Route path="/cseSem6" element={<Csesem6 />} /> 
        <Route path="/cseSem7" element={<Csesem7 />} /> 
        <Route path="/cseSem8" element={<Csesem8 />} /> 
         <Route path="/MCA" element={<Mca/>} /> 
         <Route path="/Mcasem" element={<Mcasem/>} /> 
         <Route path="/Mcasem2" element={<Mc2/>} /> 
         <Route path="/Mcasem3" element={<Mc3/>} /> 
         <Route path="/Mcasem4" element={<Mc4/>} /> 
         <Route path="/eceyears" element={<Eceyears/>} /> 
         <Route path="/ecesem1" element={<Ecesem1/>} /> 
         <Route path="/ecesem2" element={<Ecesem2/>} /> 
         <Route path="/ecesem3" element={<Ecesem3/>} /> 
         <Route path="/ecesem4" element={<Ecesem4/>} /> 
         <Route path="/ecesem5" element={<Ecesem5/>} /> 
         <Route path="/ecesem6" element={<Ecesem6/>} /> 
         <Route path="/ecesem7" element={<Ecesem7/>} /> 
         <Route path="/ecesem8" element={<Ecesem8/>} /> 
         <Route path="/eeeyears" element={<Eeeyears/>} /> 
         <Route path="/eeesem1" element={<Eeesem1/>} /> 
         <Route path="/eeesem2" element={<Eeesem2/>} /> 
         <Route path="/eeesem3" element={<Eeesem3/>} /> 
         <Route path="/eeesem4" element={<Eeesem4/>} /> 
         <Route path="/eeesem5" element={<Eeesem5/>} /> 
         <Route path="/eeesem6" element={<Eeesem6/>} /> 
         <Route path="/eeesem7" element={<Eeesem7/>} /> 
         <Route path="/eeesem8" element={<Eeesem8/>} /> 
         <Route path="/ds" element={<Ds/>} /> 
         <Route path="/dssem1" element={<Dssem1/>} /> 
         <Route path="/dssem2" element={<Dssem2/>} /> 
         <Route path="/dssem3" element={<Dssem3/>} /> 
         <Route path="/dssem4" element={<Dssem4/>} /> 
         <Route path="/dssem5" element={<Dssem5/>} /> 
         <Route path="/dssem6" element={<Dssem6/>} /> 
         <Route path="/dssem7" element={<Dssem7/>} /> 
         <Route path="/dssem8" element={<Dssem8/>} /> 
         <Route path="/mce" element={<Mce/>} /> 
         <Route path="/ai" element={<Ai/>} /> 
         <Route path="/aisem1" element={<Aisem1/>} /> 
         <Route path="/aisem2" element={<Aisem2/>} /> 
         <Route path="/aisem3" element={<Aisem3/>} /> 
         <Route path="/aisem4" element={<Aisem4/>} /> 
         <Route path="/aisem5" element={<Aisem5/>} /> 
         <Route path="/aisem6" element={<Aisem6/>} /> 
         <Route path="/aisem7" element={<Aisem7/>} /> 
         <Route path="/aisem8" element={<Aisem8/>} /> 
       
      </Routes>
    </Router> 
      
    </>
  )
}

export default App
