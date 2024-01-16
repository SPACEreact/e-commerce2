
import React , {useContext} from 'react'
//import {PRODUCTS} from '../../Product'
import { ShopContext } from '../../context/shop-context';


const CartItem = (props) => {
  
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems , removeFromCart, updateHahAmount} = useContext(ShopContext);
    const cartItemAmount = cartItems[id]

    

    
  return (
    <div className='home'>
    

    <img className='home1' src={productImage}/>
   
    <div className='home2'>{productName}</div>
    <p>{price}</p>
  
    <button className='home3' onClick={() => addToCart(id)}>+</button> 
    <input className='home4' value={cartItems[id]} onChange={(e) => updateHahAmount(id, Number(e.target.value))}></input>
    <button className='home5' onClick={() => removeFromCart(id)}>- </button>
    </div >
  )
}

export default CartItem