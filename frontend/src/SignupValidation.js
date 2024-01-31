function Validation(values){
     let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^.{8,}$/
 
     if(values.name === ""){
        error.name = "Name Should not be empty"
    }else{
        error.name = ""
    }

     if(values.email === ""){
         error.email = "Email Should not be empty"
     }else if(!email_pattern.test(values.email)){
        error.email = "Invalid Email"
    }else{
         error.email = ""
     }
 
     if(values.password === ""){
         error.password = "Password Should not be empty"
     }else if(!password_pattern.test(values.password)){
        error.password = "Inavalid Password"
    }else{
         error.password = ""
     }
 
     return error;
 }
 
 export default Validation