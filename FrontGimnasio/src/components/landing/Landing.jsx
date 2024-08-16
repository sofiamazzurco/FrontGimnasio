import { useNavigate } from 'react-router-dom';
import video from '../../../public/video.mp4';
import Button from 'react-bootstrap/Button';
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Rutinas"); //o lo que se llame el component donde estan las rutinas 
  }

  return (
    <div className="contenedor" >
        <h1 > BIENVENIDO </h1>
        <video autoPlay loop muted >
            <source className="video" src={video} type="video/mp4" />
        </video>
        <div className="botonRutinas">
          <Button variant="success" onClick={handleClick}>
            Rutinas
          </Button>
      </div>
    </div>
  );
};

export default Landing;

