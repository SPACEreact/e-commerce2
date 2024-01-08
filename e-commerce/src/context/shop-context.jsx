import { createContext, useState } from "react";

import React from 'react'

import { PRODUCTS} from '../Product';

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for ( let i=0 ;i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {

    

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}) );
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}) );
    }

    const updateHahAmount = (itemId, newAmount) => {

        setCartItems((prev) => ({...prev, [itemId]: newAmount} ))

    }

    const contextValue = {cartItems , addToCart , removeFromCart, updateHahAmount};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )

}

