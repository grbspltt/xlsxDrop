var Promise = require("bluebird");

Promise.resolve()
.then(()=>{
  console.log('Returning Data');
  return {success:true, inserted:150};
})
.then((data)=>{
  console.log(`Returned data: ${JSON.stringify(data)}`);
  console.log('throwing an error');
  throw Error('Faking an error');
},(err)=>{
  console.log(`1st Error Handler ${err.message}`);
})
.then((msg)=>{
  console.log(`Third then ${msg}`);
},(err)=>{
  console.log(`Third Error Handler ${err.message}`);
})
.then((data)=>{
  if(!data){
    console.log('no data found, skipping step');
  }
  console.log(`New data: ${data}`);
})
.catch((err)=>{
  console.log(`Catch ${err.message}`);
})