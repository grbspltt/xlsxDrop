import budget from '../models/budget'
import budgetTemp from '../models/budgetTemp'
import budgetOld from '../models/budgetOld'

export const budgetImport = (newBudget)=>{
  return budgetOld.removeAll()
    .catch((err)=>{
      console.log(err.stack);
      
    })
    .then(function(){

    })
};