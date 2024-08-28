import { useNavigate } from 'react-router-dom';
import video from '/video.mp4';
import Button from 'react-bootstrap/Button';
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/routines"); 
  }

  return (
    <div className="contenedor" style={{backgroundColor: "black"}}>
        <h2 className='p-2'>Bienvenid@!</h2>
        <video autoPlay loop muted width="1100px">
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

