import {Card} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const CardNew = (props)=> {
  let {title, author, desc, link, imageUrl} = props;
  console.log({imageUrl})
    return (
    <div className="container">
      
       <Card className="flex-fill" style={{marginTop:'80px',textAlign:'center'}}>
      <Card.Img variant="top" src={imageUrl} style={{height:'250px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'20px',textTransform:'uppercase',fontWeight:'700'}}>{title}</Card.Title>
        <Card.Text style={{fontSize:'16px',color:'GrayText'}}>{desc}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>By: {author}</ListGroup.Item>
      </ListGroup>

      <Card.Body>
      <Button variant="dark" type="submit">
        <Link to={link} target="_blank" style={{textDecoration:'none', color:'#fff'}}>Check Now</Link>
      </Button>
      </Card.Body>
    </Card>
    </div>
    );
}


export default CardNew;