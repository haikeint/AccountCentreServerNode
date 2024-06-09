import { Router } from 'express'
import homeController from '../controller/homeController'
const router = Router()

router.get('/', homeController.getHome)

export default router
