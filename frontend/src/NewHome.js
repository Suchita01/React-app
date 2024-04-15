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
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book2 = {
    "title": "The Great Gatsby",
    "author": "Scott Fitzgerald",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book3 = {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book4 = {
    "title": "Yellowface",
    "author": "R.F. Kuang",
    "desc": "R.F. Kuang continues her astonishing ascent from genre specialist to literary sensation with Yellowface",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book5 = {
    "title": "A Suitable Boy",
    "author": "Vikram Seth",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book6 = {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book7 = {
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
  }
  const book8 = {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "desc": "This is a description of first book",
    "price": 2000,
    "link":"goodreads.com"
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
