import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light'); //Tells whether dark mode is enabled or not
  const[alert, setAlert] = useState(null); 
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(32, 38, 52)';
      document.body.style.color = '#C4DFDF';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#C4DFDF';
      document.body.style.color = 'rgb(59 82 138)';
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
