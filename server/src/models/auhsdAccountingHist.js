var Promise = require('bluebird'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema, 
    auhsdAccountingHistModel;

// mongoose types
// ====================================
const Types = mongoose.SchemaTypes;

// define schema
// ====================================
var auhsdAccountingHistSchema = new Schema({
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
  collection: 'auhsdAccountingHist' //set collection name
});

// virtual fields 
// ====================================
// auhsdAccountingHistSchema .virtual('');

// instance methods
// ====================================
// auhsdAccountingHistSchema .method({});

// static methods
// ====================================
 auhsdAccountingHistSchema.static({
   recentDataDate(){
     return this.collection.find({},{dataDate: 1, _id:0}).sort({dataDate:-1}).limit(1);
   },
   recentData(){
     return this.recentDataDate()
       .then(({dataDate})=>{
         return this.collection.find({dataDate}).exec();
       })
   },
   deleteRecentData(){
     return this.recentDataDate()
       .then((dataDate)=>{
         return this.collection.deleteMany({dataDate});
       })
   }
 });

// add plugins
// ====================================
// auhsdAccountingHistSchema.plugin(); 

// add indexes
// ====================================
// auhsdAccountingHistSchema .index({});

// add options
// ====================================
auhsdAccountingHistSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// create the model
// ====================================
auhsdAccountingHistModel = mongoose.model('auhsdAccountingHist', auhsdAccountingHistSchema);
module.exports.auhsdAccountingHistSchema = auhsdAccountingHistSchema;
module.exports.auhsdAccountingHistModel = auhsdAccountingHistModel;