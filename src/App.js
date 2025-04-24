import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './Components/Main';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Footer from './Components/Footer';

import './App.css'; // Assuming you have a CSS file for styling
import { BookingForm } from './Components/BookingForm';



function App() {
  return (
    <BrowserRouter>
      
      <Nav />
      <Main />
      <Menu />
      <Footer />

 
    </BrowserRouter>
  );
}

export default App;
