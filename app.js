const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const multer = require('multer')
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}
app.use(multer({dest:"uploads"}).single("file"));
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/excel',(req, res) => {
    let answer = req.file
    console.log(answer)
    answer ? res.send(answer.originalname) : res.send(404)
});

app.listen(8000)
console.log('Server starting...')

