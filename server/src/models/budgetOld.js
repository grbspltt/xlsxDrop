import Promise from 'bluebird'
var mongoose = Promise.promisifyAll(require('mongoose')),
    Schema = mongoose.Schema,
    budgetOldModel;

// configure mongoose types
// ====================================
//mongooseTypes.loadTypes(mongoose);
const Types = mongoose.SchemaTypes;

// define schema
// ====================================
var budgetOldSchema = new Schema({
  projectNo: { type: String },
  division: { type: Number },
  object: { type: String },
  title: { type: String },
  originalBudget: { type: Number },
  budgetModifications: { type: Number },
  revisedBudget: { type: Number },
  pendingBudgetChanges: { type: Number },
  projectedBudget: { type: Number },
  committedCosts: { type: Number },
  approvedCos: { type: Number },
  revisedCommitments: { type: Number },
  pendingCostChanges: { type: Number },
  projectedCosts: { type: Number },
  directCosts: { type: Number },
  projectedOverUnder: { type: Number }
}, {
  collection: 'budgetOld' //set collection name
});

// virtual fields 
// ====================================
// budgetOldSchema .virtual('');

// instance methods
// ====================================
// budgetOldSchema .method({});

// static methods
// ====================================
budgetOldSchema.static({
  removeAll(){
    // Promise.resolve().then() pattern allows
    // you to capture something that may throw
    // =======================================
    return Promise.resolve()
    .then(()=>{
      return this.collection.drop()
    });
  },
  insertNew(rows){
    return Promise.resolve()
    .then(()=>{
      return this.collection.insert(rows);
    });
  }
});

// add plugins
// ====================================
//budgetOldSchema.plugin();

// add indexes
// ====================================
// budgetOldSchema .index({});

// add options
// ====================================
budgetOldSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// create the model
// ====================================
budgetOldModel = mongoose.model('budgetOld', budgetOldSchema);
module.exports.budgetOldSchema = budgetOldSchema;
module.exports.budgetOldModel = budgetOldModel;