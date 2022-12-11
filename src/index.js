const express = require("express");
const routes = require('./routes/authRoutes');
const PORT = 1338;
const app = express();


//#region MiddleWare
//accept json
app.use(express.json());

//accept body
app.use(express.urlencoded({extends : true}));

//use html
app.use(express.static('src/public'))

//#endregion

app.use('/api/v1', routes)

app.listen(PORT, () =>{
    console.log('App is running at port = ', PORT);
});

