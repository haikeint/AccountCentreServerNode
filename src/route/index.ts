import { Express, Router, Request, Response } from 'express'
import home from './home'
import test from './test'

const route = (app: Express) => {
    app.use('/', home)
    app.use('/test', test)
}

export default route
