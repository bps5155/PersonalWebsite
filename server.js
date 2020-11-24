const express = require("express");
const connectDB = require('./config/db')
const Message = require('./models/Messages.js');

const app = express();

connectDB();


app.get('/', (req, res) => {
    console.log("sending home page");
    res.send('Hello World!');
});

app.post('/postMessage', (req, res) => {
    console.log("post message route")
    message = new Message({
        message: "sample message"
    });
    
    message.save();
    
    console.log(req)

    res.send({
        msg:'Hello World!',
        msg2:"this is /test route"
    });
});


// Define Routes

//app.use('/api/users', require('.routes/api/users'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Personal website app listening at http://localhost:${PORT}`);
});