const express = require('express');
const app = express();

//Path to do something
app.get('/',(req,res)=> {
    res.send("Hello world!")
});

//Port to run application
app.listen(5503, () => {
    console.log('Listening to the active port');
});