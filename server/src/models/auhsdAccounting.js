var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    auhsdAccountingModel;

const Types = mongoose.SchemaTypes;

// define schema
// ====================================
var auhsdAccountingSchema = new Schema({
  description: { type: String },
  pseudoCode: { type: String },
  fundCode: { type: String },
  resourceCode: { type: String },
  goalCode: { type: String },
  functionCode: { type: String },
  subfundCode: { type: String },
  costCenterCode: { type: String },
  siteCode: { type: String},
  managerCode: { type: String },
  objectCode: { type: Number},
  reqNo: { type: String },
  poNo: { type: String },
  invoiceDate: {type: Date},
  referenceNo: {type: String},
  transactionDate: {type: Date},
  checkDate: {type: Date},
  checkNo: { type: String },
  transactionAmount: { type: Number },
  secRef: { type: String },
  contractNo: { type: String },
  batchId: { type: String },
  terms: { type: String },
  dataDate: { type: Date }
}, {
  collection: 'accounting' //set collection name
});

// virtual fields 
// ====================================
// auhsdAccountingSchema .virtual('');

// instance methods
// ====================================
// auhsdAccountingSchema .method({});

// static methods
// ====================================
// auhsdAccountingSchema .static({});

// add plugins
// ====================================
//auhsdAccountingSchema.plugin(); 

// add indexes
// ====================================
// auhsdAccountingSchema .index({});

// add options
// ====================================
auhsdAccountingSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// create the model
// ====================================
auhsdAccountingModel = mongoose.model('accounting', auhsdAccountingSchema);
module.exports.auhsdAccountingSchema = auhsdAccountingSchema;
module.exports.auhsdAccountingModel = auhsdAccountingModel;