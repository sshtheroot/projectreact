import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 


function NavBar() {

  const dateTimeNow= new Date().toLocaleString();
  const isVerified=true;
  return (
    <> 
       
      <Nav className="justify-content-end" activeKey="/home">
        <span>{dateTimeNow}</span>
        <p>{isVerified && <Checkmark/>}</p>
        <Nav.Item>
          <Nav.Link href="/home">Cloud</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Microservices</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

 

 
export default NavBar;