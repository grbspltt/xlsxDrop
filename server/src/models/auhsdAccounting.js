var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    auhsdAccountingModel,
  hist = require('./auhsdAccountingHist').auhsdAccountingHistModel;

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
auhsdAccountingSchema.static({
  toHist(){
    // check for rows to send to hist
    // ==============================
    if(this.collection.stats().count > 0){
      // if there are rows, insert into hist collection
      // ====================================
      return this.find({}).exec()
        .then((data)=>{
          return Promise.resolve()
            .then(()=>{
              return hist.collection.insert(data);
            })
            .then((result)=>{
              // If write result is ok, delete live data
              // =======================================

              // todo START HERE the write result from insert {result:{ok:1}}
              // does not match deleteMany:
              // {acknowledged: true, deletedCount: ###}

              if(result.result.ok){
                return this.collection.deleteMany({});
              } else {
                throw Error('Live Data to Hist Failed!')
              } 
            })
            .catch((err)=>{
              // If error
              // ========
              console.log(err.message);
              hist.deleteRecentData();              
            })
        })
    } else {
      return Promise.resolve()
        .then(()=>{
          return {result:{ok:1}}; //format mimicks bulk insert write result
        });
    }
  },
  clear(){
    return Promise.resolve()
      .then(()=>{
        return this.collection.deleteMany({});
      })
  },
  rollback(){
    return  Promise.resolve()
      .then(()=>{
        // Remove all data in collection
        // =============================
        return this.collection.deleteMany({});
      })
      // get most recent data from hist
      // ==============================
      .then(hist.recentData)
      .then((rows)=>{
        return Promise.resolve()
          .then(()=>{
            // insert data
            // ===========
            return this.collection.insert(rows);
          })
      })
  }
});

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