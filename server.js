const express = require('express')
const app = express()
const mongoose = require('mongoose');
var routes = require('./routes/routes');
const cors = require('cors');
const morgan = require("morgan")

app.use(cors());
app.use(morgan("dev"));
app.use(routes);

app.listen(8009, function check(err)
{
    if(err)
    console.log("Error");
    else
    console.log("Connected");
});

mongoose.connect('mongodb+srv://aanchals2003:ybdnNrQLZCSel4dQ@cluster0.ubx9thq.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

  app.use(express.json());
  app.use(routes);
