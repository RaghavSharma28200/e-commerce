import React from 'react'
import { NavLink} from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {
    return (
        <>
   <nav className='header'>
    <div className="logo">E-commerce</div>
    <div className="input"><input className = 'search' type="text" placeholder='Search Your Products here...' /></div>
    <div >
      <ul className='options'>
        <li className='options-feature'> <NavLink className='links' to="#">Login</NavLink> </li>
        <li className='options-feature'> <NavLink className='links' to="#">Sign up</NavLink></li>
        <li className='options-feature'> <NavLink className='links' to="#"> <AiOutlineShoppingCart />
        </NavLink></li>
      </ul>
    </div>
  </nav>   
    <div className='res'><input className='responsive-search search' type="text" placeholder='Search Your Products here...' /></div>
        </>
    )
}

export default Navbar
