import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode , setMode] = useState('light'); // Whether Dark Mode Enabled Or Not
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode == 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Been Enabled","success");
      document.title = "Textutils - Dark Mode";
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled","success");
      document.title = "Textutils - Light Mode";
    }
  }
  return (
<>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        {/* <About mode={mode}/> */}
        <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>
</div>
{/* <Navbar/> */}
</>
);
}

export default App;
