import Promise from 'bluebird'
var  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  objectId = Schema.Types.ObjectId;
import { shortDate } from './plugins'

var acpHistModel;

let acpHistSchema = new Schema({
  //projId: {type: objectId, ref: 'proj'},
  projectNo: {type: String},
  date: {type: String},
  cpfoNo: {type: String},
  pcoNo: {type: String},
  description: {type: String},
  remarks: {type: String},
  days: {type: Number},
  bdgtEst: {type: Number},
  bdgtProp: {type: Number},
  bdgtAprv: {type: Number},
  bdgtAppd: {type: Number},
  lineItemCount: {type: Number},
  lineItems: [{
    itemNo: {type: String},
    costCode: {type: String},
    itemTitle: {type: String},
    bdgtEst: {type: Number},
    bdgtProp: {type: Number},
    bdgtAprv: {type: Number},
    bdgtAppd: {type: Number}
  }],
  dataDate: {type: Date, default: Date.now, get: shortDate}
}, {
  collection: 'acpHist' //set collection name
});
//virtual fields
// acpHistSchema .virtual('');

//methods
// acpHistSchema .method({});

//static methods
// acpHistSchema .static({});

//add plugins
// acpHistSchema .plugin();

//add indexes
// acpHistSchema .index({});

//add options
acpHistSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
acpHistModel = mongoose.model('acpHist', acpHistSchema);
module.exports.acpHistSchema = acpHistSchema;
module.exports.acpHistModel = acpHistModel;