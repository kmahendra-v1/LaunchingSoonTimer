import React from 'react';
import { ReactComponent as Facebook } from '../images/icon-facebook.svg';
import { ReactComponent as Instagram } from '../images/icon-instagram.svg';
import { ReactComponent as Pinterest } from '../images/icon-pinterest.svg';

const Footer = () => {
  return (
    <div className="social-media-links">
      <div className="logo">
        <Facebook />
      </div>
      <div className="logo">
        <Pinterest />
      </div>
      <div className="logo">
        <Instagram />
      </div>
    </div>
  );
};

export default Footer;
