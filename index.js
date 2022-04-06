const express = require('express');
// const db = require('./db.js');
const router = require('./network/routes');
const config = require('./config')
// const cors = require("cors");

// const corsOpts = {
//     origin: '*',
  
//     methods: [
//       'GET',
//       'POST',
//     ],
  
//     allowedHeaders: [
//       'Content-Type',
//     ],
//   };
  
// const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT;

// db.connect(DB_URI);

const app = express();
app.use(express.json());
app.use(express.urlencoded());
// app.use(cors(corsOpts));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

router(app);

// app.use('/', express.static('public'));

app.listen(PORT);
console.log("Servidor escuchando en el puerto: ", PORT);