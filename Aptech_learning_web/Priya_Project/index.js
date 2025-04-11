const express =require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const bcrypt=require('bcrypt');
const cors=require('cors');
const app=express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}));

const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'root',
    database: 'aptechvirar'
});


db.connect(err => {
    if (err) throw err;
    console.log('Connected to the Database!');
});


app.post('/', (req, res) => {
    console.log(req.body);
    const { name, phone, incourse } = req.body;
  
   
    // bcrypt.hash(password, 10, (err, hashedPassword) => {
    //   if (err) throw err;
  
      const query = 'INSERT INTO users (name, phone, incourse) VALUES (?, ?, ?)';
      db.query(query, [name, phone, incourse], (err, result) => {
        if (err) throw err;
        res.send('Registration Successful!');
      });
    });

app.listen(3000, () => {
    console.log('Server is runnning on port 3000')
});