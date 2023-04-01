import Carousel from 'react-bootstrap/Carousel';
import Uno from  '../../assets/Uno.jpg'
import Dos from '../../assets/Dos.jpg';
import Tres from '../../assets/Tres.png';

function Carrusel() {
  return (
    <div className='carrsel'>
      <Carousel>
      <Carousel.Item>
        <img
          src={Uno} width="100%"height="700"
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Dos} width="100%"height="700"
          alt=''
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Tres} width="100%"height="700"
          alt=''
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Carrusel;