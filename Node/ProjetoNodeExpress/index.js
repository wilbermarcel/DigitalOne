const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

userRouter(app);

app.get('/', (req, res) => res.send('Olá mundo pelo express'));
app.listen(port, () => console.log('rodando na porta 3000'));
