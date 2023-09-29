import React from 'react'
import { useSelector } from 'react-redux';
import Item from './Item';

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart);
  return (
    <div className='row'>
      {cartItems.map((item)=> <Item key={item.id} product={item} btn_text='Remove from Cart'/>)}
    </div>
  )
}

export default Cart;
