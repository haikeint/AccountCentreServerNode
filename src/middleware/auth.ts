import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    next()
    // const token = req.headers['authorization']

    // if (!token) {
    //     return res
    //         .status(401)
    //         .json({ message: 'Access denied. No token provided.' })
    // }

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //     req.user = decoded
    //     next()
    // } catch (error) {
    //     res.status(400).json({ message: 'Invalid token.' })
    // }
}

export default authMiddleware
