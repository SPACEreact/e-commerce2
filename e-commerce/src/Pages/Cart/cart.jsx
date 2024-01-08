import React ,{ useContext } from 'react';

import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../Product';
import CartItem from './cartItem';



function Cart  (props) {
  const { cartItems} = useContext(ShopContext);
  

  return (
    <>
    <div>Cart</div>

    <div>{PRODUCTS.map((product) => {
          const { id } = product;
          if (cartItems[id] > 0) {
            return <CartItem key={id} data={product} />;
          } 
           
        })}</div>
    
    </>
  )
}

export default Cart;