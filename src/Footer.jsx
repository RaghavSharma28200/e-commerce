import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
      <div className="footer">
      <div className="footer__logo">
      <div className="logo">E-commerce</div>
      </div>
      <ul className="footer__nav">
        <li><Link to="#">About us</Link></li>
        <li><Link to="#"></Link></li>
        <li><Link to="#">Help</Link></li>
        <li><Link to="#">Contact us</Link></li>
      </ul>
      <p className="footer__copyright">
        &copy; by Kuldeep Shobhit & Raghav. All rights reserved.
      </p>
    </div>
        </>
    )
}

export default Footer
