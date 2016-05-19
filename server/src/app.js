import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import models from './models/db'
import routes from './routes'
let app = express();

export default models

// Setup Logging
// =============
app.use(logger('tiny'));
app.use(express.static('../../client/build'));
app.use(bodyParser.json({limit:'50mb',extended:false, parameterLimit:100000}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:false, parameterLimit:100000}));

// Setup CORS
// ==========
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Cache-Control", "no-cache, no-store");
  next();
});

// Load Models On req.models
// =========================
app.use((req,res,next)=>{
  req.models = models;
  next();
});
app.use(routes);

let server = app.listen(8081,()=>{
  let host = server.address().address,
    port = server.address().port;

  console.log('listening on http://%s:%s', host, port)
});