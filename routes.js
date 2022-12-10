import {Router} from 'express'
import controller from './api/controller.js'
import signature from './api/signatureController.js'
const router = Router()


router.get('/ping',controller.ping)
router.get('/systemStatus',controller.systemStatus)
router.get('/getAllCoins',controller.getAllCoins)
router.get('/getAllTrades',controller.getAllTrades)
router.post('/signature',signature)


export default router