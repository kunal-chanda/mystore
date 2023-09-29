import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/CartSlice';
import { useDispatch } from 'react-redux';

const Item = (props) => {
    const dispatch  = useDispatch();
    console.log(props);
  return (
    <div className='col-md-2'>
    <Card style={{ height:'450px', border:'black solid', marginBottom:'8px' }}>
    <Card.Img variant="top" src={props.product.image} style={{ width: '200px', height:'200px', padding:'4px' }} />
        <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text className='d-inline-block text-truncate overflow-hidden' style={{maxWidth: '200px'}}>
            INR. {props.product.price}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={()=> dispatch(add(props.product))}>Add to Cart</Button>
        </Card.Footer>
    </Card>
</div>
  )
}

export default Item
