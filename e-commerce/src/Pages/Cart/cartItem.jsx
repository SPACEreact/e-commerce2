
import React , {useContext} from 'react'
import {PRODUCTS} from '../../Product'
import { ShopContext } from '../../context/shop-context';


const CartItem = (props) => {
  
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems , removeFromCart, updateHahAmount} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    

    
  return (
    <>
    <div>cartItem</div>

    <img src={productImage}/>
    <div>Discription</div>
    <div>{productName}</div>
    <p>{price}</p>
  
    <button onClick={() => addToCart(id)}>+{cartItemAmount > 0 && <>{cartItemAmount}</>}</button> 
    <input value={cartItems[id]} onChange={(e) => updateHahAmount(id, Number(e.target.value))}></input>
    <button onClick={() => removeFromCart(id)}>- {cartItemAmount > 0 && <>{cartItemAmount}</>}</button>
    </>
  )
}

export default CartItem