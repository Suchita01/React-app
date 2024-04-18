const register = (req, res, db) => {

    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];


    db.query(sql , [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })

  };
  
  const login = (req, res, db) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?"
    db.query(sql , [req.body.email, req.body.password], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Failed");           
        } 
    })
  };

  const addbook = (req, res, db) => {
    const sql = "INSERT INTO books (`name`, `description`, `author`, `price`,`imageUrl`, `link`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.description,
        req.body.author,
        req.body.price,
        req.body.imageUrl,
        req.body.link
    ];


    db.query(sql , [values], (err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })

  };

  const getBooks = (req, res, db) => {

    const sql = "SELECT * FROM books"
    db.query(sql , [], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json(data);//list of books passed from res.
        } else {
            return res.json("Failed");           
        } 
    })
  };
  
  module.exports = { register, login, addbook, getBooks};