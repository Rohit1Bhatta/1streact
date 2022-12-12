
import './App1.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import AboutUs from './Components/AboutUs';
//  import ReactDOM from "react-dom/client";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  BrowserRouter as Router ,
  Routes
} from "react-router-dom";




function App() {

  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{

    setAlert({
      msg:message,
      type:type

    })
   
    setTimeout(() => {
      
      setAlert(null)
   
    }, 1800);

  }
  const toggleMode =()=>{
    if (mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="rgb(1 36 72)";
     showAlert("Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled " , "success");
    }
  }
  return (
    <>
<Router>
    <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}  />
    <Routes>
    <Route exact path="/" element={<TextForm heading ="Try Text Utils : A Text Counter , Word Counter and Extra Sapce Remover   " 
    showAlert={showAlert}   mode={mode}  toggleMode={toggleMode}/>} />
    <Route exact path="about" element={<AboutUs  mode={mode} toggleMode={toggleMode}/>} />
    
</Routes> 
   <div className='container my-5'>
  
   </div>
   </Router>
    </>
  );
}

export default App;
