const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }).catch(error => {
    console.log('Error connection MongoDB check this out: ' + error);
});;
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successsfully!');
});

const exerciseRoute = require('./routes/exercises');
const userRoute = require('./routes/users');

app.use('/exercises', exerciseRoute);
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
