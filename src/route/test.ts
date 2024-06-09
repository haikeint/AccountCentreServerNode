import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Page Test')
})
router.get('/test123', (req: Request, res: Response) => {
    res.send('test123')
})
export default router
