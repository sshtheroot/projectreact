import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Bengaluru Dev</Card.Title>
        <Card.Text>
          Software Developer
          Cloud Technology Enthusiast
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;