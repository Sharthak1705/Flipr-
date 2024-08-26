import React from 'react';
import logo from '../assets/image/logo.svg'
import facebook from '../assets/icons/Frame.svg'
import Instagram from '../assets/icons/Group.svg'
import Twitter from '../assets/icons/insta.svg'
import Linkedin from '../assets/icons/Linkedin.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Reak Trust. All rights reserved.</p>
      <div className="footer-logo">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="footer-icons">
        <img src={facebook} alt="Facebook" className="icon" />
        <img src={Instagram} alt="Instagram" className="icon" />
        <img src={Twitter} alt="Twitter" className="icon" />
        <img src={Linkedin} alt="Linkedin" className="icon" />
        
      </div>
    </footer>
  );
};

export default Footer;

