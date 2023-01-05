import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
        <nav className="nav">
        <a href="/" className='criberr'> <img src={logo} alt='criberrlogo' /></a>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes  size={25} style={{color: '#094aad'}}/>) 
            : (<FaBars  size={25} style={{color: '#094aad'}}/>) } 
            
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'> <a href='/'>Home</a></li>
            <li className='nav-item'> <a href='/'>About</a></li>
            <li className='nav-item'> <a href='/'>Features</a></li>
            <li className='nav-item'> <a href='/'>Contact</a></li>
            {/* <CustomLink to="hero" spy={true} smooth={true} duration={500}>Home</CustomLink>
            <CustomLink to="about" spy={true} smooth={true} duration={500}>About</CustomLink>
            <CustomLink to="features" spy={true} smooth={true} duration={500}>Features</CustomLink>
            <CustomLink to="contact" spy={true} smooth={true} duration={500}>Contact</CustomLink> */}
        </ul>
    </nav>
    </div>
)



}

export default Navbar
// function CustomLink({to, children, ...props}){
//     const path = window.location.pathname

//     return(
//         <li className={path === to? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }