import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import '../Login.css';

const Login = () => {
  return (
    <div className='bimg'>

      
     <Container className='d-flex justify-content-center align-items-center'>

      <Form className='content'>
      <h3 align="center" className='text'>Login</h3>
      <Form.Group>
              <Form.Label className='text-white'>Email</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
      </Form.Group>

      <Form.Group>
              <Form.Label className='text-white'>Password</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
      </Form.Group>

      <Form.Group className='mt-3 d-flex justify-content-center align-items-center'>
            <Button variant='outline-secondary' className='w-50 text-white' type='submit'>Login</Button>
      </Form.Group>
         

      </Form>
      </Container>
      
        
    </div>
  )
}

export default Login