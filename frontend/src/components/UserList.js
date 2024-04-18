import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';

const UserList = ({ users }) => {
return (
    <div className="UserList" style={{backgroundColor:'#222'}}>
        <div className='container'> 
      <h2 className="userheading mb-5 pt-5" style={{color:'#fff', fontWeight:'700'}}>USERS LIST</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {users.map((user) => (
          <Col key={user.id}>
            <Card className="flex-fill usercard mb-5" style={{textAlign:'center'}}>
              <Card.Img variant="top" src={user.avatar} alt={user.first_name} style={{}}/>
              <Card.Body>
                <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </div>
    </div>
  );
};

export default UserList;
