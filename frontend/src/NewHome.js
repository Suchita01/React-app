import { React, useEffect, useState} from 'react'
import NavbarNew from './components/NavbarNew';
import Header from './components/Header';
import CardNew from './components/CardNew';
import AddBookForm from './components/Form';
import Carousels from './components/Carousels';
import Footer from './Footer';
import { Col, Row} from "react-bootstrap";
import Validation from './AddBookValidation';
import axios from 'axios';


const NewHome = () => {


  const [bookData, setBookData] = useState({
    name: '',
    description: '',
    author: '',
    price: '',
    imageUrl:'',
    link:''
})

const [errors, setErrors] = useState({})

const [bookList, setBookList] = useState(null)

const handleInputChange = (event) => {
    setBookData(prev => ({...prev, [event.target.name]:[event.target.value]}))
}

useEffect(() =>{
  fetchBooks()
},[]);

const fetchBooks = ()=>{
  axios.get('http://localhost:8081/getBooks')
  .then(res => {
      if(res.data==="Error"){
        alert("Book not added")
      }else{
        setBookList(res.data)
      } 
  })
  .catch(err => console.log(err))
}

const handleSubmit = (event) => {
  event.preventDefault();
  const err = Validation(bookData);
  setErrors(err)

  if(err.name==="" && err.description==="" && err.author==="" && err.price===""){

      axios.post('http://localhost:8081/addbook', bookData)
      .then(res => {
            if(res.data==="Error"){
            alert("Book not added")
          }else{ 
            setBookData({
              name: '',
              description: '',
              author: '',
              price: '',
              imageUrl:'',
              link:''
          })
            fetchBooks()
          } 
      })
      .catch(err => console.log(err))
  }
}

  return (
    <div className="page">
      <NavbarNew />
      <Carousels />
      <AddBookForm
      bookData={bookData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      errors={errors}
      />
      <Header />
      <Row>
      {bookList!=null && Array.isArray(bookList) && bookList.map((book) => {
          return <Col className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <CardNew title={book.name?book.name.slice(0, 55):""} 
          desc={book.description?book.description.slice(0, 100):""} 
          price={book.price} author={book.author} imageUrl={book.imageUrl} link={book.link}/>
          </Col>
      })}
      </Row>
     
     <Footer />
   </div>  
    );
  }

   export default NewHome
