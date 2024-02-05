 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 

function Profile() {
  return (
    <Card style={{ width: '18rem' }}>
     
      <Card.Img variant="top" src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"/> 
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