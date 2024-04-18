function Validation(bookData){
    let error = {}
   

    if(bookData.name === ""){
       error.name = "Book name can't be empty"
    }else{
        error.name = ""
    }

    
    if(bookData.description === ""){
        error.description = "Description can't be empty"
    }else{
        error.description = ""
    }

    if(bookData.author === ""){
        error.author = "Author can't be empty"
    }else{
        error.author = ""
    }

    if(bookData.price === ""){
        error.price = "Price can't be empty"
    }else{
        error.price = ""
    }

    if(bookData.imageUrl === ""){
        error.imageUrl = "Image can't be empty"
    }else{
        error.imageUrl = ""
    }

    return error;
}

export default Validation