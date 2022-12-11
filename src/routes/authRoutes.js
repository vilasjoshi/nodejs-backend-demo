const express = require('express');
const router = express.Router();


router.post('/signup', (req, res) => {
    try{
        const {Name, Email, Password} = req.body;
        
        console.log(req.body);
        console.log(Name, Email, Password);
    }
    catch(e){
        console.log(e);
    }
});



module.exports = router;