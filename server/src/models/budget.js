import Promise from 'bluebird'
import budgetOld from './budgetOld'
var mongoose = Promise.promisifyAll(require('mongoose')),
    Schema = mongoose.Schema,
    budgetModel;

// configure mongoose types
// ================================
const Types = mongoose.SchemaTypes;

// define schema
// ================================
var budgetSchema = new Schema({
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
  collection: 'budget' //set collection name
});

// virtual fields 
// ====================================
// budgetSchema .virtual('');

// instance methods
// ====================================
// budgetSchema .method({});

// static methods
// ====================================
budgetSchema.static({
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
// budgetSchema.plugin();

// add indexes
// ====================================
// budgetSchema .index({});

// add options
// ====================================
budgetSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// create the model
// ====================================
budgetModel = mongoose.model('budget', budgetSchema);
module.exports.budgetSchema = budgetSchema;
module.exports.budgetModel = budgetModel;