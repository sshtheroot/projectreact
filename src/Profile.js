import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

function Profile() {
  return (
    <Card style={{ width: '18rem' }}>
      <Col xs={6} md={4}>
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA" roundedCircle/></Col>
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