import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaEthereum } from "react-icons/fa"

const Header = () => {
  return (
    <div className='navbar' >
        <div className="logo">
            <Link to='/'>
            <h1>CryptoMania</h1>
            </Link>
            <FaEthereum color='#00FF00' size={"25"} style={{marginLeft:"5px"}} /> 
        </div>
      <ul>
        {/* <li> <Link to='/' >Home</Link> </li> */}
        <li> <Link to='/coins'>Coins</Link></li>
        <li> <Link to='/news'>News</Link></li>
      </ul>
    </div>
  )
}

export default Header