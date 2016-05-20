import Promise from 'bluebird'
import { transform } from '../libs/auhsd'
export default {
  importNew(req, res, next){
  Promise.resolve()
    .then(()=>{
      return transform(req.body);
    })
    .then((data)=>{
      return req.models.auhsdAccounting.collection.insert(data);
    })
    .then((result)=>{
      return res.status(201).json({success: !!result.result.ok, rowsProcessed: result.insertedCount });
    }) // todo: backup live dataset, delete live, write new to live
    .catch((err)=>{
      return res.status(500).json(err.message)
    })
}
}