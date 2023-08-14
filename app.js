const express = require('express');
const PORT = 3000;
const app = express();

app.listen(PORT,(req,res)=>{
    console.log(`The server is running at ${PORT}`);
})

