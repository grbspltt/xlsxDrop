import mongoose from 'mongoose'
import models from './index'

mongoose.connect('mongodb://localhost/uploadTest');
let connection = mongoose.connection;

connection.on('error',console.error.bind(console,'connection error:'));
connection.on('reconnected', console.info.bind(console,'reconnected to Database'));
connection.once('open',function(){
  console.info('Connected to Database');
});

export default models;