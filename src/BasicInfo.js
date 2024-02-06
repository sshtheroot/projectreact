import Accordion from 'react-bootstrap/Accordion';

function BasicInfo() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Item #1</Accordion.Header>
        <Accordion.Body> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Item #2</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


export default BasicInfo;