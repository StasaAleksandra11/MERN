require('dotenv').config()
const mongoose = require("mongoose");
const app = require('./index');



const DB_URL = process.env.MONGO_URL.replace('<db_password>', process.env.MONGO_PASSWORD)

mongoose.connect(DB_URL)
  .then((data) => {
    console.log('mongoDb je povezan');
    
  })
  .catch((err) => {
    console.log('mongoDb nije povezan');
  }) 
  
  const port = process.env.PORT || 4000;

  app.listen(port , (err) =>{
    if(err) console.log(err, 'Aplikacija nije pokrenuta');
    else console.log("aplikacija radi na portu" , port);
    
  })