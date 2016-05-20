var Promise = require("bluebird");
Promise.config({
  cancellation: true
});


var toHist = new Promise(function(resolve, reject, cancel){
  cancel(function(){
    console.log('cancelling toHist (rollback from hist)');
  })
});

Promise.resolve()
  .then(()=>{
    console.log('done');
    return {ok: 1};
  })
  .then((result)=>{
    console.log(result);
  });