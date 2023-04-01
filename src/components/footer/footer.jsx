import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../footer/footer.css'

const Footer = () => {
  return (
    
    <div className='footer'>
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
    
  )
}

export default Footer;