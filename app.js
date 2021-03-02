// @Description: All server running configuration is setting up here.
// @CreatedAt:
// @Author-name: Md. Sazzad Bin Anwar

const express = require('express');
const app = express();
// const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8080;
const { errorHandler, notFound } = require('./middlewares/middlewares');

app.use(cors());
// app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();

app.use('/api/v1', require('./routes/AppRoute'));

app.use(errorHandler);

//To use the production build of react uncomment below code 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log('Build file connected');
});
app.use(notFound);

app.listen(port, () => console.log(`Your care app is listening on port ${port}!`));
