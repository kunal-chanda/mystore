import React, { useEffect, useState } from 'react'
import Item from './Item';


const Product = () => {
 
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>setProducts(result));
    },[]);
  return (
    <div className='row'>
      {products.map((product)=><Item key={product.id} product={product} btn_text='Add to Cart'/>
    )}
    </div>
  )
}

export default Product
