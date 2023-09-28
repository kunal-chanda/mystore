import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>setProducts(result));
    },[]);
  return (
    <div className='row'>
      {products.map((product)=>{
        return(
        <div className='col-md-2'>
            <Card key={product.id} style={{ height:'450px', border:'black solid', marginBottom:'8px' }}>
            <Card.Img variant="top" src={product.image} style={{ width: '200px', height:'200px', padding:'4px' }} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className='d-inline-block text-truncate overflow-hidden' style={{maxWidth: '200px'}}>
                    INR. {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>)
      }
    )}
    </div>
  )
}

export default Product
