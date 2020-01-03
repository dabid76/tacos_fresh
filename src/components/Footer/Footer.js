import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
        <div className="contact">
            <p>Phone: <a href="tel:651 777 3966">(651)777-3966</a></p>
            <p>Address: 3156 Century Avenue North, Mahtomedi, Minnesota 55110</p>
            <p>Hours: Sunday-Thursday 11AM-9PM ; Friday & Saturday 11AM-12AM</p>
            <p>Email: <a href="mailto:tacofreshfusion@yahoo.com" className="contact-link">tacofreshfusion@yahoo.com</a> • Follow us on <a href="https://www.facebook.com/tacosfreshasianfusionsportscantina/">Facebook</a></p>
        </div>       
  </footer>
);

export default Footer;
