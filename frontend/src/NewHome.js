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
    "desc": "First published in 1960, To Kill a Mockingbird quickly became an international bestseller. Nowadays, it often features on the lists of the best English-language books of the past century, and has been described by The Guardian as the “book of a lifetime”.",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird?from_search=true&from_srp=true&qid=pzybwLdp9L&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
  }
  const book2 = {
    "title": "The Great Gatsby",
    "author": "Scott Fitzgerald",
    "desc": " The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island ",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/4671.The_Great_Gatsby?from_search=true&from_srp=true&qid=pa1VmKGs6p&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg"
  }
  const book3 = {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "desc": "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings?from_search=true&from_srp=true&qid=o5VvPCNyYj&rank=5",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
  }
  const book4 = {
    "title": "Yellowface",
    "author": "R.F. Kuang",
    "desc": "R.F. Kuang continues her astonishing ascent from genre specialist to literary sensation with Yellowface",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/62047984-yellowface?from_search=true&from_srp=true&qid=1q4njuh8Pm&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671336608i/62047984.jpg"
  }
  const book5 = {
    "title": "A Suitable Boy",
    "author": "Vikram Seth",
    "desc": "A Suitable Boy takes us into the richly imagined world of four large extended families and spins a compulsively readable tale of their lives and loves. A sweeping panoramic portrait of a complex, multiethnic society in flux",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/1166135.A_Suitable_Boy?from_search=true&from_srp=true&qid=Qj5Bcz3CYo&rank=2",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408939736i/1166135.jpg"
  }
  const book6 = {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "desc": "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work her own darling child and its vivacious heroine, Elizabeth Bennet, as delightful a creature as ever appeared in print. The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. ",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/1885.Pride_and_Prejudice?from_search=true&from_srp=true&qid=ynnKzOY8P1&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
  }
  const book7 = {
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "desc": "Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning?",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/2767052-the-hunger-games?from_search=true&from_srp=true&qid=g4aMrbinqK&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg"
  }
  const book8 = {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "desc": "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
    "price": 2000,
    "link":"https://www.goodreads.com/book/show/18144590-the-alchemist?from_search=true&from_srp=true&qid=nT3K8VOaab&rank=1",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
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
          link={book.link} author={book.author} imageUrl={book.imageUrl}/>
          </Col>
      })}
      </Row>
     
     <Footer />
   </div>  
    );
  }

   export default NewHome
