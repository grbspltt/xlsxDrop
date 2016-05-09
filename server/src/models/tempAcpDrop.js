var Promise = require('bluebird'),
  mongoose = Promise.promisifyAll(require('mongoose')),
  Schema = mongoose.Schema,
  objectId = Schema.Types.ObjectId,
  shortDate = require('./plugins').shortDate;
var tempAcpDropModel;

var tempAcpDropSchema = new Schema({
  Project: String,
  "CPFO #": String,
  "CPFO Date": String,
  Description: String,
  "PCO #": String,
  "Approved Amount": String,
  "Pre-Apprvd Days": String,
  "CPFO Remarks": String,
  "Item #": String,
  "Cost Code": String,
  "Item Description": String,
  "Bdgt Est.": String,
  "Bdgt Prop.": String,
  "Bdgt Aprv": String,
  "Bdgt Appd.": String
}, {
  collection: 'tempAcpDrop' //set collection name
});
//virtual fields
// tempAcpDropSchema .virtual('');

//methods
// tempAcpDropSchema .method({});

//static methods
tempAcpDropSchema.static({
  convert(){
    return this.aggregateAsync([
      {$sort:{Project:1,dataDate:1,"CPFO #":1,"PCO #":1,"Item #":1}},
      {$group:{_id:{projectNo:"$Project",cpfoNo:"$CPFO #",pcoNo:"$PCO #",date:"$CPFO Date",days:"$Pre-Apprvd Days",description:"$Description",remarks:"$CPFO Remarks",dataDate:"$dataDate"},
        bdgtEst:{"$sum":"$Bdgt Est."},bdgtProp:{"$sum":"$Bdgt Prop."},bdgtAprv:{"$sum":"$Bdgt Aprv"},bdgtAppd:{"$sum":"$Bdgt Appd."},lineItemCount:{"$sum":1},
        lineItems:{$push:{itemNo:"$Item #",costCode:"$Cost Code",itemTitle:"$Item Description",bdgtEst:"$Bdgt Est.",bdgtProp:'$Bdgt Prop.',bdgtAprv:"$Bdgt Aprv",bdgtAppd:"$Bdgt Appd."}}}},
      {$project:{_id:0,projectNo:"$_id.projectNo",dataDate:"$_id.dataDate",cpfoNo:"$_id.cpfoNo",pcoNo:"$_id.pcoNo",date:"$_id.date",days:"$_id.days",description:"$_id.description",remarks:"$_id.remarks",bdgtEst:"$bdgtEst",bdgtProp:"$bdgtProp",bdgtAprv:"$bdgtAprv",bdgtAppd:"$bdgtAppd",lineItemCount:"$lineItemCount",lineItems:"$lineItems"
      }},
      {$sort:{projectNo:1,dataDate:1,cpfoNo:1,pcoNo:1}},
      {$out:"importAcpConverted"}
    ],{allowDiskUse: true})
  },
  clear(){
    return this.removeAsync({})
  }
});

//add plugins
// tempAcpDropSchema .plugin();

//add indexes
// tempAcpDropSchema .index({});

//add options
tempAcpDropSchema.set('toJSON', {getters: true, virtuals: true});

//create the model
tempAcpDropModel = mongoose.model('acpTempDrop', tempAcpDropSchema);
module.exports.tempAcpDropSchema = tempAcpDropSchema;
module.exports.tempAcpDropModel = tempAcpDropModel; 