import React from 'react'
import HomeContent from './HomeContent'
//import '../Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import img from '../Images/Food1.jpg';
import img2 from '../Images/Food2.jpg';
import img4 from '../Images/Food3.jpg';


function Home() {
  return (
    <div>

    <Container fluid>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-75"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='animate__slideInDown'>For the love of delicious food.</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-75"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-75"
          src={img4}
          alt="Third slide"
        />

          <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>   

    <Container>
        <HomeContent/>
    </Container>
    
    </div>
  )
}

export default Home