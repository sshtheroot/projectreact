import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Theme from './Theme'; 


function NavBar() {

  const dateTimeNow= new Date().toLocaleString();
  const isVerified=false;

  const items=['Cloud','Algorithm','Java'];
  
  return (
    
 
    <header className="flex items-center justify-between py-10">
    <div className="hidden h-6 text-2xl font-semibold sm:block">
                Bengaluru Dev
              </div>
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
            <Theme />
          </Nav.Link>
        </Nav.Item>
      

      </Nav>
      </header>
   
  );
}
 
export default NavBar;