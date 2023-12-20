// import React from "react";
// import { Link } from "react-router-dom";
import './Header.css';


// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Home</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <Link className="nav-link active" aria-current="page" to="/user-details">User details</Link>
//             <Link className="nav-link" to="/about-us">About us</Link>
//             <Link className="nav-link" to="/contact-us">Contact us</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState } from "react";



import  { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { LanguageContext } from "../../context/language";
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentLang } from '../../store/slices/language'; 
import { changeCurrentTheme } from '../../store/slices/themeSlice';

import { ThemeContext } from "../../context/theme";
import { useEffect } from 'react';





const Header = () => {
  const { contextLang ,  setContextLang } = useContext(LanguageContext)

  const language = useSelector((state) => state.language.current_lang);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.current_theme);

  const { contextTheme ,  setContextTheme } = useContext(ThemeContext)


  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    dispatch(changeCurrentLang(newLanguage));
  }      

  



  const cartItems = useSelector(state => state.cart.items);


  
  const [activeLink, setActiveLink] = useState("/");

    
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    // Check if the current item has a "quantity" property
    if (currentItem.hasOwnProperty("quantity")) {
      // Add the quantity of the current item to the accumulator
      return accumulator + currentItem.quantity;
    }
    // If the current item doesn't have a "quantity" property, return the accumulator as is
    return accumulator;
  }, 0); // Initialize accumulator to 0
  
  


  
      return (
        <nav>
          <ul className=''>

          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={activeLink === "/login" ? "active" : ""}
            >
              login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className={activeLink === "/register" ? "active" : ""}
            >
              register
            </Link>
          </li>
            <li>
              
                <div className="language-switcher">
                  <select value={contextLang} onChange={(e) => setContextLang(e.target.value)}>
                    <option value="ar">Arabic</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                  </select>
                </div>
            </li>
            <li>
            <div className="theme-switcher">
              <select value={contextTheme} onChange={(e) => setContextTheme(e.target.value)}>
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
              </select>
            </div>            
            </li>
            <li>
            <Link
              to="/cart"
                  className={activeLink === "/cart" ? "active" : ""}
            >
              <button  class="btn btn-primary position-relative">
              <i class="fa fa-cart-plus fa-2x " aria-hidden="true"></i>
              <span class="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-secondary">{totalQuantity} <span class="visually-hidden">unread messages</span></span>
              </button>

            </Link>
          </li>




        </ul>
      </nav>
      );
    }
    
    

export default Header;
