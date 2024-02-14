import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 


function NavBar() {

  const dateTimeNow= new Date().toLocaleString();
  const isVerified=false;

  const items=['Cloud','Algorithm','Java'];
  
  return (
    
    <> 
      <Nav className="justify-content-end" activeKey="/home">
        <span>{dateTimeNow}</span>
        <p>{isVerified && <a>Verified</a>}</p>
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
      

          <select>

            {this.props.items.map(item=> <option>{items}</option>)}

          </select>
       

      </Nav>
    </>
  );
}

 

 
export default NavBar;