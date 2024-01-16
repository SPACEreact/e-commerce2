import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { CodesandboxLogo } from 'phosphor-react';

function Navbar () {
  return (
    <div className='home15'>
    <div className='logo'>DroidTech <CodesandboxLogo size={32} /></div>

    <div>

    <div className='home16'>

    <p className='home17'><Link to="/" > Home </Link></p>
    <p className='home18'><Link to="/cart" > <ShoppingCart/> </Link></p>

    </div>

    </div>
    
    </div>
    
  )
}

export default Navbar;