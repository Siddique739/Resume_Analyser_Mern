const express = require('express');

const app = express();
require('./conn')

const PORT = 4000;

app.get('/', (req, res) => {
    res.send({
        message: "Hello from backend"
    });
})

app.listen(PORT,() =>{
  console.log("backend is running ",PORT)
})