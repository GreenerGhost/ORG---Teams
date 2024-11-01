import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer' style={ { backgroundImage: "url(/img/footer.png)" } }>
      <div className='footer-social-links'>
        <a href="#">
          <img src='/img/facebook.png' alt='facebook'/>
        </a>
        <a href="#">
          <img src='/img/twitter.png' alt='twitter'/>
        </a>
        <a href="#">
          <img src='/img/instagram.png' alt='instagram'/>
        </a>
      </div>
      <img src='/img/Logo.png' alt='org'/>
      <strong>Desarrollado por Edgar Cruz</strong>
    </footer>
  );
};
