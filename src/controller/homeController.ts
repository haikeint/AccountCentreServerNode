import { Request, Response } from 'express'
const getHome = (req: Request, res: Response) => {
    res.send('Home Page')
}

export default {
    getHome,
}
