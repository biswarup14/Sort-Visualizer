import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/biswarup-bhattacharjee-2a836019a/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
         Biswarup Bhattacharjee
        </a>
        
      </section>
    </footer>
  );
};

export default Footer;
