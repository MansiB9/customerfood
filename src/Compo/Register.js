import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import '../Register.css';

const Register = () => {
  return (
    <div className='backimg'>

       {/* <Container className='head'>
          <h2 className='text-white ms-5 mt-5'>Welcome to ServiceProvider Login</h2>
          <img className='cimg' src={img2} alt='Hi'/>
       </Container> */}
       
        <Container className='text justify-content-center align-items-center  form-div'> 
           <h3 align="center" className='text-white'>Customer Registration</h3>
            <div className= 'd-flex justify-content-center align-items-center'>
            
           
        <Form className='ms-3 me-3 border p-3 border-1 border-black border-radius ms-lg-4 col-md-7 coverage d-flex flex-column'>
          <Form.Group>
              <Form.Label className='text-white'>Name</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
          </Form.Group>
          
          <Form.Group>
              <Form.Label className='text-white'>Address</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label className='text-white'>Mob No</Form.Label>
              <Form.Control className='glass' type='Number'></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label className='text-white'>Email</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
          </Form.Group>

          <Form.Group>
              <Form.Label className='text-white'>Password</Form.Label>
              <Form.Control className='glass' type='Text'></Form.Control>
          </Form.Group>
         <Form.Group className='mt-3 d-flex justify-content-center align-items-center'>
            <Button variant='outline-secondary' className=' w-50' type='submit'>Sign Up</Button>
        </Form.Group>
         
        </Form>
        </div>
        </Container>

    </div>
  )
}

export default Register