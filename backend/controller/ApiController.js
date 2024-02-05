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
        console.log(res.body)
        if(data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Failed");           
        } 
    })
  };
  
  module.exports = { register, login };