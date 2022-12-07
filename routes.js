import {Router} from 'express'
import controller from './api/controller.js'
const router = Router()


router.get('/ping',controller.ping)
router.get('/systemStatus',controller.systemStatus)
router.get('/getAllCoins',controller.getAllCoins)


export default router