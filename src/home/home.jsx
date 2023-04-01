import React from 'react'
import Carrusel from '../components/carrusel/carrusel'
import Container from 'react-bootstrap/Container';
import Personajes from '../pages/personajes';
import Footer from '../components/footer/footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <div>
        <Carrusel/>
        <div>
        <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
        </Col>
        <Col md="auto"><h1>Victor Andres Pinzon Satizabal 2429500</h1></Col>
        <Col xs lg="2">
        </Col>
      </Row>
      </Container>
        </div>
        <div>
        <Personajes/>
        </div>
        <div>
          <Footer/>
        </div>
        
    </div>
    

  )
}

export default Home;