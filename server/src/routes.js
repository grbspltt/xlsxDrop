import express from 'express'
let router = express.Router();

import dataRoutes from './routes/'

// App Health http://dshaw.github.io/2012-05-jsday/#/14/1
// ====================================
router.get('/app', function(req, res, next){
  res.send({
    pid: process.pid,
    memory: process.memoryUsage(),
    uptime: process.uptime()
  });
});

router.get('/', (req, res, next)=>{
  return res.json('aloha')
});
router.use('/data', dataRoutes);

export default router;