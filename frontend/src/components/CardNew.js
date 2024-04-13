import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


const CardNew = (props)=> {
  let {title, author, desc, link} = props;
    return (
    <div className="container">
       <Card className="flex-fill" style={{marginTop:'80px',textAlign:'center'}}>
      <Card.Img variant="top" src="b1.jpg" style={{height:'250px'}} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Author Name : {author}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{link}</Card.Link>
        {/* <Card.Link href="#">More</Card.Link> */}
      </Card.Body>
    </Card>
    </div>
    );
}


export default CardNew;