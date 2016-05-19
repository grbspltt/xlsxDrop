

export default {
  importNew(req, res, next){
  var  rows = req.body;
  // var dataDate = new Date();
  // var accounting = rows.map(function(row){
  //   var newRow = {};
  //   if(row['PE ID']){newRow.peId = row['PE ID'];}
  //   if(row['Description']){newRow.description = row['Description'];}
  //   if(row['Pseudo']){newRow.pseudoCode = row['Pseudo'];}
  //   if(row['Fund']){newRow.fundCode = row['Fund'];}
  //   if(row['Resource']){newRow.resourceCode = row['Resource'];}
  //   if(row['Goal']){newRow.goalCode = row['Goal'];}
  //   if(row['Function']){newRow.functionCode = row['Function'];}
  //   if(row['Subfund']){newRow.subfundCode = row['Subfund'];}
  //   if(row['Cost Center']){newRow.costCenterCode = row['Cost Center'];}
  //   if(row['Site']){newRow.siteCode = row['Site'];}
  //   if(row['Manager']){newRow.managerCode = row['Manager'];}
  //   if(row['Object']){newRow.objectCode = row['Object'];}
  //   if(row['Reference #']){newRow.refNo = row['Reference #'];}
  //   if(row['Transaction Date']){newRow.transactionDate = new Date(row['Transaction Date']);}
  //   if(row['Transaction Amt']){newRow.transactionAmount = parseFloat(row['Transaction Amt'])} else { newRow.transactionAmount = 0;}
  //   if(row['Batch ID']){newRow.batchId = row['Batch ID'];}
  //   if(row['Vendor']){newRow.vendor = row['Vendor'];}
  //   if(row['Req #']){newRow.reqNo = row['Req #'];}
  //   if(row['PO #']){newRow.poNo = row['PO #'];}
  //   if(row['Invoice Date']){newRow.invoiceDate = new Date(row['Invoice Date']);}
  //   if(row['Check Date']){newRow.checkDate = new Date(row['Check Date']);}
  //   newRow.dataDate = dataDate;
  //   return newRow;
  // });
  console.log(`Data: ${rows}`);
  return res.status(201).json({success:true});
}
}