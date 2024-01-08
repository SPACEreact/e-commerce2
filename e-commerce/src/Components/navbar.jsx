import React from 'react';
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { CodesandboxLogo } from 'phosphor-react';

function Navbar () {
  return (
    <>
    <div>DroidTech <CodesandboxLogo size={32} /></div>

    <div>

    <div>

    <Link to="/" > Home </Link>
    <Link to="/cart" > <ShoppingCart/> </Link>

    </div>

    </div>
    
    </>
    
  )
}

export default Navbar;