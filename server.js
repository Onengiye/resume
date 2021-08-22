const express = require('express');
const path= require('path');



const app = express();
const port = process.env.PORT || 3030;

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/img', express.static(path.join(__dirname, '/img')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(port,()=>{
    console.log('CV is online')
})