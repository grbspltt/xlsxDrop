import Promise from 'bluebird'
var promisifyAll = Promise.promisifyAll;
import { shortDate } from './plugins'
let mongoose = promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

let importAcpConvertedModel;

let importAcpConvertedSchema = new Schema({
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
  collection: 'importAcpConverted' //set collection name
});
//virtual fields
// importAcpConvertedSchema .virtual('');

//methods
// importAcpConvertedSchema .method({});

//static methods
// importAcpConvertedSchema .static({});

//add plugins
// importAcpConvertedSchema .plugin();

//add indexes
// importAcpConvertedSchema .index({});

//add options
importAcpConvertedSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
importAcpConvertedModel = mongoose.model('importAcpConverted', importAcpConvertedSchema);
module.exports.importAcpConvertedSchema = importAcpConvertedSchema;
module.exports.importAcpConvertedModel = importAcpConvertedModel;