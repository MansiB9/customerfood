import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, decreQty, increQty } from '../Reduxwork/CartSlice'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

  const navi = useNavigate()
  const { CartItems, CartTotalAmt } = useSelector((state) => state.cart)
  const dispatcher = useDispatch()

  dispatcher(calculateTotal())
  return (
    <div>
      <Row>
        {
          CartItems.map((item) => {
            const iid = item._id
            return (
              <Col sm={12} md={4} lg={3}>
                <Card className='dot'>
                  <Card.Header className='dimg'>
                    <Card.Img className='crtimg' src={"http://localhost:5000".concat(item.FoodImage)} />
                  </Card.Header>
                  <Card.Body>
                    <p>Food : {item.FoodName}</p>
                    <p>Price : {item.FoodPrice}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => dispatcher(decreQty({ iid }))}>-</Button>
                    {item.qty}
                    <Button onClick={() => dispatcher(increQty({ iid }))}>+</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Col><h3>Total: {CartTotalAmt}</h3></Col>
        <Col><Button onClick={() => navi('/placeorder')}>Check Out</Button></Col>
      </Row>

    </div>
  )
}

export default Cart