import './App.css'
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextBase" mode={mode} index="Home" about="About" toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
