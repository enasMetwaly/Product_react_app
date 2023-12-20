import logo from './logo.svg';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Routes";



import './App.css';
import { Route,Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Header from './components/Header/Header'
import { useSelector } from "react-redux";
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";



import { useState } from "react";






function App() {
  const [ contextLang , setContextLang ] = useState('fr')
  const lang = useSelector((state) => state.language.current_lang);






  
  const [ contextTheme , setContextTheme ] = useState('light')
  const theme = useSelector((state) => state.theme.current_theme);





  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
      <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>
          <div  className={contextTheme === "light" ? "light" : "dark"}
          dir={contextLang === "ar" ? "rtl" : "ltr"}>
            <Header />
            <div>
              <Router />
            </div>
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;






