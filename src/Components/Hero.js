import React from 'react';
import bannerImg from '../assets/restauranfood.jpg';
const Header = () => {
  return (
    <header className="header">

      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p> We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <a href='/reservations'> <button aria-label='On Click'>Reserve a Table</button> </a>
        </div>

        <div className='banner-img'>
          <img src={bannerImg} alt="Little Lemon Banner" /> </div>
        
      </section>
      
    
    </header>
  );
}

export default Header;