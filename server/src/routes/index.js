import Express from 'express'
import Promise from 'bluebird'
var Router = Express.Router;
const router = new Router();

import ucsd from './ucsd'
import auhsd from './auhsd'
// all routes here have a url of /data
router.post('/procore', (req,res,next)=>{
  next();
});
router.post('/auhsdAccounting', auhsd.importNew);
router.post('/ucsd/acp', ucsd.acpDrop);

export default router;
