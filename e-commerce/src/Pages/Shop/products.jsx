import React, {useContext} from 'react';

import {ShopContextProvider} from '../../context/shop-context'

import {ShopContext} from '../../context/shop-context'



function Products(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  

  return (
    <>
      <div>{productName}</div>

      <h1>hha</h1>
      
      
      <img src={productImage} alt={productName} /> 

      <div>{price}</div>
      <p><button onClick={() => addToCart(id)}>Add to cart{ cartItemAmount > 0 &&<>({cartItemAmount}) </>}</button></p>
    </>
  );
}

export default Products; 
