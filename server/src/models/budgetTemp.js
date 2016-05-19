var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    budgetTempModel;

// configure mongoose types
// ====================================
//mongooseTypes.loadTypes(mongoose);
const Types = mongoose.SchemaTypes;

// define schema
// ====================================
var budgetTempSchema = new Schema({
  projectNo: { type: String },
  "Cost Code": { type: String },
  "Original Budget": { type: Number },
  "Budget Modifications": { type: Number },
  "Revised Budget": { type: Number },
  "Pending Budget Changes": { type: Number },
  "Committed Costs": { type: Number },
  "Direct Costs": { type: Number },
  "Approved Changes": { type: Number },
  "Pending Cost Changes": { type: Number },
  "Projected Costs": { type: Number },
  "Forecast to Complete": { type: Number },
  "Estimated Cost at Completion": { type: Number },
  "Projected Over/Under": { type: Number },
  dataDate: { type: Date, default: Date.now }
}, {
  collection: 'budgetTemp' //set collection name
});

// virtual fields 
// ====================================
// budgetTempSchema .virtual('');

// instance methods
// ====================================
budgetTempSchema.method({
  cleanup(){
    var row = this;
    var newRow = {};
    if(row['projectNo']){ newRow.projectNo = row['projectNo'].toString()}
    if(row['Cost Code']){
      newRow.division = row['Cost Code'].substr(0,3);
      newRow.object = row['Cost Code'].substr(4,4);
      newRow.title = row['Cost Code'].substr(11);
    }
    if(row['Original Budget']){ newRow.originalBudget = parseFloat(row['Original Budget'])} else { newRow.originalBudget =  0}
    if(row['Budget Modifications']){ newRow.budgetModifications = parseFloat(row['Budget Modifications'])} else { newRow.budgetModifications = 0}
    if(row['Revised Budget']){ newRow.revisedBudget = parseFloat(row['Revised Budget'])} else { newRow.revisedBudget = 0}
    if(row['Pending Budget Changes']){ newRow.pendingBudgetChanges = row['Pending Budget Changes']} else { newRow.pendingBudgetChanges = 0}
    if(row['Committed Costs']){ newRow.committedCosts = parseFloat(row['Committed Costs'])} else { newRow.committedCosts = 0}
    if(row['Direct Costs']){ newRow.directCosts = parseFloat(row['Direct Costs'])} else { newRow.directCosts = 0}
    if(row['Approved Changes']){ newRow.approvedCos = parseFloat(row['Approved Changes'])} else { newRow.approvedCos = 0}
    if(row['Pending Cost Changes']){ newRow.pendingCostChanges = parseFloat(row['Pending Cost Changes'])} else { newRow.pendingCostChanges = 0}
    if(row['Projected Costs']){ newRow.projectedCosts = parseFloat(row['Projected Costs'])} else { newRow.projectedCosts = 0}
    if(row['Forecast To Complete']){ newRow.forecastToComplete = parseFloat(row['Forecast To Complete'])} else { newRow.forecastToComplete = 0}
    if(row['Estimated Cost at Completion']){ newRow.estimatedCostAtCompletion = parseFloat(row['Estimated Cost at Completion'])} else { newRow.estimatedCostAtCompletion = 0}
    if(row['Projected Over/Under']){ newRow.projectedOverUnder = parseFloat(row['Projected Over/Under'])} else { newRow.projectedOverUnder = 0}
    newRow.dataDate = row.dataDate;
    return newRow;
  }
});

// static methods
// ====================================
budgetTempSchema.static({
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
// budgetTempSchema.plugin();

// add indexes
// ====================================
// budgetTempSchema .index({});

// add options
// ====================================
budgetTempSchema.set('toJSON', {
  getters: true,
  virtuals: true
});

// create the model
// ====================================
budgetTempModel = mongoose.model('budgetTemp', budgetTempSchema);
module.exports.budgetTempSchema = budgetTempSchema;
module.exports.budgetTempModel = budgetTempModel;