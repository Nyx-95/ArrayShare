
import './App.css';
import Header from "./Components/Header/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Components/Body/body';
import $ from "jquery"
import "./Fonts/Expose/Expose-Black.ttf";
import { useState, useEffect } from 'react';




function App() {

  /* Theme Change Starts*/
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const toggleTheme = () => {
    if (theme === 'light') {
 
      setTheme('dark');
    } 
    else {
   
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme; 
  }, [theme]);
  /* Theme Change Ends*/

  return (
    <div className="App theme">
      <Header changeTheme={toggleTheme} theme={theme}/>
      <Body ></Body>
    </div>
  );
}

export default App;
