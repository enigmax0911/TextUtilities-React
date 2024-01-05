
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useCallback, useState} from 'react'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode , setmode] = useState('light');
  const [alert , setalert]=useState(null);
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout((alert) => {
      setalert(null);
    }, 1800);
  }
  const togglemode = () =>{
        if(mode === 'light')
        {
          setmode('dark');
          document.body.style.backgroundColor="#2d2a57";
          showalert("dark mode has been enabled", "Success")
          document.title = "Textutility-dark mode";
          // setInterval(() => {
          //   document.title = "Textutility is awesome";
          // }, 1500);

          // setInterval(() => {
          //   document.title = "Install Textutility";
          // }, 2200);
        }
        else
        {
          setmode('light');
          document.body.style.backgroundColor="white";
          showalert("light mode has been enabled", "Success")
          document.title = "Textutility-light mode";
        }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
                  <Route path="/" element={<Textform heading="Enter Text below to analyze" mode={mode} showalert={showalert} />} />
                  {/* <Route path="/About" element={<About about="About Us" mode={mode} togglemode={togglemode} />} /> 
          </Routes> */}
          <Textform heading="Enter Text below to analyze" mode={mode} showalert={showalert} />
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
