import { Router } from 'express'

import { Adddata,Getdata,DeleteData,Updatedata

 } 
 from './controller'

const router = new Router()

router.post('/AddData',Adddata)
router.get('/getdata',Getdata)
 router.put('/updatedata/:id',Updatedata)
 router.delete('/DeleteData/:id',DeleteData)

export default router
