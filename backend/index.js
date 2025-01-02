const express = require('express');
const cors = require('cors');
const app = express();
 
  //* models
const Users = require('./models/userModel')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())



// * register 

app.post('/register', async (req, res, next) =>{
    
     try{
         const user =  await Users.findOne({email: req.body.email })
         if(!user){
            const newUser = new Users(req.body)
            console.log(newUser, 'newUSers');
            
            try{
                
                const saveMeUser = await newUser.save();
                console.log('usao u try block koda');
                return res.status(200).json({
                    status: 'success',
                    message: "user uspesno kreiran"
                })
                

             } catch(err){
                return res.status(500).json({
                    status: 'error',
                    message: 'greska je na serveru'
                })
                
             }

         }
         else{

            return res.status(500).json({
                status: 'error',
                message: 'account vec postoji'
            })
         }
     }
     catch(err){
        return res.status(500).json({
            status: 'error',
            message: 'greska je na serveru'
        })
     }
       
    console.log(req.body);
    console.log('post, ovde sam')
    res.status(200).json({
        status: 'success',
        message: "user uspesno kreiran"
    })
  
    
})

// * Login

app.post('/login', async(req, res, next)=>{
    try{
        const user =  await Users.findOne({email: req.body.email})
        console.log(user);
        if(user){
            if(user.password === req.body.password){
                console.log('korisnik je logovan');
                res.status(200).json({
                    status: 'success',
                    message: "uspesno ulogovani"
                })
            }else{
                return res.status(404).json({
                    status: 'error',
                    message: 'uneli ste pogresan email ili lozinku'
                })
            }

        }else{
            return res.status(500).json({
                status: 'error',
                message: 'takav korisnik ne postoji'
            })
        }
    } 
    catch(err){
        return res.status(500).json({
            status: 'error',
            message: 'greska je na serveru'
        })
     }
    
    
})



module.exports = app;