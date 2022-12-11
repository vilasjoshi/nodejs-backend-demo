const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const createDb = require('../config/db');
const {validateName, validateEmail} = require('../utils/validations')

let users = {

}

//Db online
createDb.sync().then(() =>{
    console.log("Db is online");
})

router.post('/signup', async (req, res) => {
    try{
        const {Name, Email, Password} = req.body;
        const isUserPresent = users.hasOwnProperty(Email);
        if(isUserPresent){
            res.send("User already present");
        }
        //validation can be done on - name, email, password.
        
        //hashing password before storing
        const hashedPassword = await bcrypt.hash(Password, 10);

        users[Email]= { Name, Password: hashedPassword };
        res.send("User added Successfully.");
    }
    catch(e){
        console.log(e);
    }
});

router.post('/signin', async(req, res) => {
    try {
        //retrive email and password from body
        const {Email, Password} = req.body;

        //check if user present
        const isPresent = users.hasOwnProperty(Email);
        if(!isPresent){
            res.send("Invalid credentials.");
        }
        //check if password is correct
        const passMatch = await bcrypt.compare(Password, users[Email].Password);
        if(!passMatch){
            res.send("Password not correct. Credentials not valid.");
        }
        res.send("Sign In Successfull");
    } catch (e) {
        
    }
})

module.exports = router;