import Promise from 'bluebird'
var  mongoose = Promise.promisifyAll(require('mongoose'));
import { acpHistModel as acpHist } from './acpHist'
var  Schema = mongoose.Schema,
  objectId = Schema.Types.ObjectId,
  shortDate = require('./plugins').shortDate;
var acpModel;

let acpSchema = new Schema({
  //projId: { type: objectId, ref: 'proj' },
  projectNo: { type: String },
  date: { type: String },
  cpfoNo: { type: String },
  pcoNo: { type: String },
  description: { type: String },
  remarks: { type: String },
  days: { type: Number },
  bdgtEst: { type: Number },
  bdgtProp : { type: Number },
  bdgtAprv: { type: Number },
  bdgtAppd: { type: Number },
  lineItemCount: { type: Number },
  lineItems: [{
    itemNo: {type: String},
    costCode: {type: String},
    itemTitle: {type: String},
    bdgtEst: {type: Number},
    bdgtProp: {type: Number},
    bdgtAprv: {type: Number},
    bdgtAppd: {type: Number}
  }],
  dataDate: {type: Date, default: Date.now, get: shortDate }
}, {
  collection: 'acp' //set collection name
});
//virtual fields
// acpSchema .virtual('');

//methods
// acpSchema .method({});

//static methods
acpSchema.static({
  toHist(){
    return acpModel.collection.find({}).execAsync()
      .then(function(acp){
        return acpHist.collection.insertAsync(acp)
      }).then(function(v){
        if(v.writeErrors.length > 0){
          return Promise.resolve((resolve,reject)=>{
            let err = new Error(v.writeErrors.errmsg);
            err.code = v.writeErrors.code;
            return reject(err)
          })
        } else {
          //todo check if this is the true behavior of bulk inserting records
          return v.nInserted;
        }
      })
  }
});

//add plugins
// acpSchema .plugin();

//add indexes
// acpSchema .index({});

//add options
acpSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
acpModel = mongoose.model('acp', acpSchema);
module.exports.acpSchema = acpSchema;
module.exports.acpModel = acpModel;