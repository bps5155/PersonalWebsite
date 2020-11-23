const express = require("express");
const app = express();
//const port = 5000;

app.get('/', (req, res) => {
    console.log("sending home page");
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    console.log("sending home page");
    res.send('Hello World!');
});


// Define Routes

//app.use('/api/users', require('.routes/api/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Personal website app listening at http://localhost:${PORT}`);
});