import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample() {
  return (
    <div className='container'>
    <Card style={{ width: '18rem',marginTop:'50px',textAlign:'center' }}>
      <Card.Img variant="top" src="b1.jpg" style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>A Suitable Boy</Card.Title>
        <Card.Text>
        A Suitable Boy is a novel by Vikram Seth, published in 1993. With 1,349 pages, the English-language book is one of the longest novels published in a single volume.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Author Name : Vikram Seth</ListGroup.Item>
       
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Download</Card.Link>
        <Card.Link href="#">More</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default KitchenSinkExample;