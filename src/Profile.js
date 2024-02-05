import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

function Profile() {
  return (
    <Card style={{ width: '18rem' }}>
     
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA" roundedCircle/> 
      <Card.Body>
        <Card.Title>Bengaluru Developer</Card.Title>
        <Card.Text>
          Software Developer
          Cloud Technology Enthusiast
        </Card.Text>
        <Button variant="primary">Explore</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;