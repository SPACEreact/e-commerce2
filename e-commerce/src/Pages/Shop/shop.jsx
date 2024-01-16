import React from 'react';
//import {Link} from 'react-router-dom';
import { PRODUCTS} from '../../Product';
import  Products  from './products';

function Shop () {
  return (
    <>
   

    <div className='prod'>
      
      {PRODUCTS.map((products) => (
        <Products key={products.id} data={products}/>
      )  )}

    </div>
    
    </>
  )
}

export default Shop;