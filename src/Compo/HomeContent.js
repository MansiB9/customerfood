import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { addItem } from '../Reduxwork/CartSlice'
import { useDispatch } from 'react-redux'



function HomeContent() {
    const [allfood, setallfood] = useState([])
    
    const dispatcher = useDispatch()
    
    useEffect(() => {
        axios.get("http://localhost:5000/food")
          .then((result) => {
            setallfood(result.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }, [])

  return (
   <div>
    <Container>
        <Row>
            {
                allfood.map((foods, Idx) => {
                    return (
                      <Col lg={3} sm={12} md={6} className='mt-5'>
                        <Card className='data'>
                          <Card.Header className='Cimg'>
                          <Card.Img className='style' src={`http://localhost:5000${foods.FoodImage}`} />
                          </Card.Header>
                          
                          <Card.Body>
                            <h3 className='w-100 text-start ms-4 mb-3'>{foods.FoodName}</h3>
                            <h5 className='w-100 ms-4 mb-3'>{foods.FoodType}</h5>
                            <h5 className='w-100 ms-4 mb-3'>{foods.FoodCategory}</h5>
                            <h5 className='w-100 ms-4 mb-3'>{foods.FoodPrice}</h5>
                            <h5 className='w-100 ms-4 mb-3'>{foods.FoodIsAvailable ? "Available" : "Not Available"}</h5>
                          </Card.Body>

                          <Card.Footer>
                          <Button className='button w-50 ms-5' varient='outline-primary' size='sm'
                            onClick={() => {
                              dispatcher(addItem(foods))
                            }}>Add to Cart</Button>
                          </Card.Footer>
                          </Card>
                          </Col>
                        )
            })
            }
        </Row>
    </Container>
   </div> 
   
  )
}

export default HomeContent