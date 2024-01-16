import React, {useContext} from 'react';

//import {ShopContextProvider} from '../../context/shop-context'

import {ShopContext} from '../../context/shop-context'

import '../../App.css'



function Products(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  

  return (
    <div className='home12 '>
      <div className='home8'>{productName}</div>

      
      
      
      <img className='home9' src={productImage} alt={productName} /> 

      <div className='home10'>{price}₹</div>
      <p><button className='home11' onClick={() => addToCart(id)}>Add to cart{ cartItemAmount > 0 &&<>({cartItemAmount}) </>}</button></p>
    </div>
  );
}

export default Products; 
