import {Row, Col, Form, Button} from 'react-bootstrap';

const AddBookForm=({ bookData, handleInputChange, handleSubmit, errors ,link})=> {

  return (
    <Form onSubmit={handleSubmit} className="container">
      <Row className="mb-3">
      <div className="heading mb-5">
        <h1>ADD BOOK</h1>
      </div>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control type="text" name='name' value={bookData.name} onChange= {handleInputChange} autocomplete="Off" placeholder="Enter Name" />
          {errors.name && <Form.Text className='text-danger'>{errors.name}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Book Description</Form.Label>
          <Form.Control type="text" name='description' value={bookData.description} onChange= {handleInputChange} autocomplete="Off" placeholder="Enter Book Description" />
          {errors.description && <Form.Text className='text-danger'>{errors.description}</Form.Text>}
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAuthor">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" name='author' value={bookData.author} onChange= {handleInputChange} autocomplete="Off" placeholder="Enter Author Name" />
          {errors.author && <Form.Text className='text-danger'>{errors.author}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Book Price</Form.Label>
          <Form.Control type="number" name='price' value={bookData.price} onChange= {handleInputChange}  autocomplete="Off" placeholder="In Rupees" />
          {errors.price && <Form.Text className='text-danger'>{errors.price}</Form.Text>}
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridImageUrl">
        <Form.Label>Select Book Cover</Form.Label>
        <Form.Select name='imageUrl' value={bookData.imageUrl} onChange={handleInputChange}>
                    <option>Select</option>
                    <option value="Image-1.jpg">Book Cover 1</option>
                    <option value="Image-2.jpg">Book Cover 2</option>
                    <option value="Image-3.jpg">Book Cover 3</option>
                    <option value="Image-4.jpg">Book Cover 4</option>
                    <option value="Image-5.jpg">Book Cover 5</option>
                    <option value="Image-6.jpg">Book Cover 6</option>
                    <option value="Image-7.jpg">Book Cover 7</option>
                    <option value="Image-8.jpg">Book Cover 8</option>
                    <option value="Image-9.jpg">Book Cover 9</option>
                    <option value="Image-10.jpg">Book Cover 10</option>
              </Form.Select>
              {errors.imageUrl && <Form.Text className='text-danger'>{errors.imageUrl}</Form.Text>}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLink">
          <Form.Label>Book Link</Form.Label>
          <Form.Control type="text" name='link' value={bookData.link} onChange= {handleInputChange} placeholder="Add Book Link" />
          {errors.link && <Form.Text className='text-danger'>{errors.link}</Form.Text>}
        </Form.Group>

        </Row>
       
      <Button variant="dark" type="submit" style={{fontWeight:'500',padding:'10px 20px'}}>
        Add Book
      </Button>
    </Form>
  );
}

export default AddBookForm;