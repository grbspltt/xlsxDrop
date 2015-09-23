import { promisifyAll } from 'bluebird'
let mongoose = promisifyAll(require('mongoose'));
const { Schema, model, Schema:{Types:{ObjectId: objectId}} } = mongoose;
import { shortDate } from 'plugins'
let acpModel;

let acpSchema = new Schema({
  projId: { type: objectId, ref: 'proj' },
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
// acpSchema .static({});

//add plugins
// acpSchema .plugin();

//add indexes
// acpSchema .index({});

//add options
acpSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
acpModel = model('acp', acpSchema);
module.exports.acpSchema = acpSchema;
module.exports.acpModel = acpModel;