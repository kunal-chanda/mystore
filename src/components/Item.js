import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add, deleteFromCart } from '../store/CartSlice';
import { useDispatch } from 'react-redux';

const Item = (props) => {
    const dispatch  = useDispatch();
    console.log(props);

    const handleClick=(id)=>{
      if(props.btn_text==='Add to Cart'){
        dispatch(add(props.product));
      }else if(props.btn_text==='Remove from Cart'){
        dispatch(deleteFromCart(id));
      }
    }
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
            <Button variant="primary" onClick={()=>handleClick(props.product.id) }>{props.btn_text}</Button>
        </Card.Footer>
    </Card>
</div>
  )
}

export default Item
