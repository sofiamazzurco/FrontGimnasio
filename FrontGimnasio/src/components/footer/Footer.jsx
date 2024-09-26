import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaInstagram, FaMailBulk, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://www.facebook.com/">
            <FaFacebook /> Facebook
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.instagram.com/">
            <FaInstagram /> Instagram
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="mailto:gym@gmail.com">
            <FaMailBulk /> Correo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://wa.me/123456">
            <FaWhatsapp /> WhatsApp
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;
