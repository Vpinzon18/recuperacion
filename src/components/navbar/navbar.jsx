import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/Logo.jpg';
import '../navbar/navbar.css'

function Navegacion() {
  return (
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
    </Container>
  </Navbar>
    
  );
}

export default Navegacion;