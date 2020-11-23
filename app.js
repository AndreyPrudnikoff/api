const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:63342',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/register',(req, res) => {
    let answer = req.body.name
    console.log(answer)
    res.send(JSON.stringify({"name": "MyName"}))
});

app.listen(3000)
console.log('Server starting...')
