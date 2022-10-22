import './App.css';
import HomeStart from './components/HomeStart';
import Navbar from './components/Navbar';
import { useState } from 'react'
import React from 'react';
import responsivo from './components/Navbar.module.css'
import TabMenu from './components/TabMenu';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Brightness4Icon from '@mui/icons-material/Brightness4';




function App() {
    // add state
    const [darkTheme, setDarkTheme] = React.useState(false)
    // rest remains same
    
    const handleChange = (event) => {
      setDarkTheme(event.target.checked);
      console.log(event.target.checked)
    };
  

  return (
    <div>
      <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <switch
        checked={darkTheme}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
         />

      <header className={responsivo.header}>
              <span className={responsivo.teste}>GO</span>
              <input className={responsivo.side_menu} type="checkbox" id="side_menu"/>
              <label className={responsivo.hamb} for="side_menu"><span className={responsivo.hamb_line}></span></label>
              <nav className={responsivo.nav}>
                  <ul className={responsivo.menu}>

                  <li><Switch  onChange={() => setDarkTheme(prevTheme => !prevTheme)}>
                  </Switch>
                  </li>
                          <li>Projetos</li>
                          <li>Experiencia</li>
                          <li>Curriculo</li>
                  </ul>
              </nav>
          </header>
      <HomeStart/>

      
      </div>

    </div>
  );
}

export default App;
