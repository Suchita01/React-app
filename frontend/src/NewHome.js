import React from 'react'
import NavbarNew from './components/NavbarNew';
import Header from './components/Header';
import CardNew from './components/CardNew';
import Form from './components/Form';
import Carousels from './components/Carousels';
import Footer from './Footer';
import { Col, Row } from "react-bootstrap";


const NewHome = () => {
  const book1 = {
    "title": "Book1",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book2 = {
    "title": "Book2",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book3 = {
    "title": "Book3",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book4 = {
    "title": "Book4",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book5 = {
    "title": "Book5",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book6 = {
    "title": "Book6",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book7 = {
    "title": "Book7",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  const book8 = {
    "title": "Book8",
    "author": "Dan",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"https:www.google.com"
  }
  var bookList = [];

  bookList.push(book1);
  bookList.push(book2);
  bookList.push(book3);
  bookList.push(book4);
  bookList.push(book5);
  bookList.push(book6);
  bookList.push(book7);
  bookList.push(book8);

  
  return (
    <div className="page">
      <NavbarNew />
      <Carousels />
      <Form />
      <Header />
      <Row>
      {bookList.map((book) => {
          return <Col className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <CardNew title={book.title?book.title.slice(0, 55):""} 
          desc={book.desc?book.desc.slice(0, 100):""} 
          link={book.link} author={book.author}/>
          </Col>
      })}
      </Row>
     
     <Footer />
   </div>  
    );
  }

   export default NewHome
