import React from 'react';
import logo from '../assets/logo.svg';

function Footer() {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Little Lemon Logo" />
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                </div>

                <div className=''>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Log in</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: 123 Main St, Toronto, Canada</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Email: little@little-lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
