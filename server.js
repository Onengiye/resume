const express = require('express');



const app = express();
const port = process.env.PORT || 3030;

app.get('/',(req,res)=>{
    res.sendFile('/index.html');
})
app.listen(port,()=>{
    console.log('CV is online')
})