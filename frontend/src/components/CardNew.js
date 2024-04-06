import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  return (
    <div className='container'>
    <Card style={{ width: '18rem',marginTop:'50px' }}>
      <Card.Img variant="top" src="b1.jpg" style={{height:'280px'}} />
      <Card.Body>
        <Card.Title>Book Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default KitchenSinkExample;