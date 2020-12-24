const express = require('express');
const bodyParser = require('body-parser');
const port = 3000
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/calculator.html")
});

app.post('/', (req, res) => {
    console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var ans = num1 + num2
    res.send("<h1>" + num1 + " + " + num2 + " = " + ans + "</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});