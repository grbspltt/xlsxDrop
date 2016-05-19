import Promise from 'bluebird'
import _ from 'lodash'
export default {
  importNew(req, res, next){
  Promise.resolve()
    .then(()=>{
      var  rows = req.body;
      var dataDate = new Date();
      return rows.map(function(row){
        // check for null rows
        // ===================
        if(!row['PE ID']){
          return;
        }
        var newRow = {};
        if(row['PE ID']){newRow.peId = row['PE ID'];}
        if(row['Description']){newRow.description = row['Description'];}
        if(row['Pseudo']){newRow.pseudoCode = row['Pseudo'];}
        if(row['Fund']){newRow.fundCode = row['Fund'];}
        if(row['Resource']){newRow.resourceCode = row['Resource'];}
        if(row['Goal']){newRow.goalCode = row['Goal'];}
        if(row['Function']){newRow.functionCode = row['Function'];}
        if(row['Subfund']){newRow.subfundCode = row['Subfund'];}
        if(row['Cost Center']){newRow.costCenterCode = row['Cost Center'];}
        if(row['Site']){newRow.siteCode = row['Site'];}
        if(row['Manager']){newRow.managerCode = row['Manager'];}
        if(row['Object']){newRow.objectCode = row['Object'];}
        if(row['Reference #']){newRow.refNo = row['Reference #'];}
        var transactionDate = new Date(row['Transaction Date']);
        if(transactionDate.toString() !== 'Invalid Date'){newRow.transactionDate = transactionDate;}
        if(row['Transaction Amt']){newRow.transactionAmount = parseFloat(row['Transaction Amt'])} else { newRow.transactionAmount = 0;}
        if(row['Batch ID']){newRow.batchId = row['Batch ID'];}
        if(row['Vendor']){newRow.vendor = row['Vendor'];} if(row['Req #']){newRow.reqNo = row['Req #'];}
        if(row['PO #']){newRow.poNo = row['PO #'];}
        var invoiceDate = new Date(row['Invoice Date']);
        if(invoiceDate.toString() !== 'Invalid Date'){newRow.invoiceDate = invoiceDate;}
        var checkDate = new Date(row['Check Date']);
        if( checkDate.toString() !== 'Invalid Date'){newRow.checkDate = checkDate;}
        newRow.dataDate = dataDate;
        return newRow;
      });
    })
    .then((_data)=>{
      return _.compact(_data);
    })
    .then((data)=>{
      return req.models.auhsdAccounting.collection.insert(data);
    })
    .then((result)=>{
      return res.status(201).json({success: !!result.result.ok, rowsProcessed: result.insertedCount });
    })
    .catch((err)=>{
      return res.status(500).json(err.message)
    })
}
}