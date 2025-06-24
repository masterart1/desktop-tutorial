import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
 
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
    const [alert,setalert]=useState(null)
const showalert=(message,type)=>{
setalert({
    msg:message,
    type:type
})
setTimeout(() => {
  setalert(null);
},1500);
}
const[mode2,setmode2]=useState('light')
  const[mode,setmode]=useState('light')
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.background='black';
            document.body.style.color='white';
showalert("darkmode enabled","success")
    }
    else{
      setmode('light');
            document.body.style.background=' white';
                        document.body.style.color='black';
showalert("lightmode enbled","success")

    }
  }
   const togglemode2=()=>{
    if(mode2==='light'){
      setmode2('green');
      document.body.style.background='green';
            document.body.style.color='white';
showalert("greenmode enabled","success")
    }
    else{
      setmode2('light');
            document.body.style.background=' white';
                        document.body.style.color='green';
showalert("lightmode enbled","success")

    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar  title="TextUtils" mode={mode} mode2={mode2} togglemode2={togglemode2} togglemode={togglemode} aboutText="About"/>
    <Alert alert={alert} />
    <div className="container my-3"> 
      {/* <Routes> */}
  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element={< */}
    <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
    {/* } /> */}
{/* </Routes> */}


    </div>
    {/* </Router> */}
     </>
  );
}

export default App;
