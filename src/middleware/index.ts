import { Express } from 'express'

import auth from './auth'

const middleware = (app: Express) => {
    app.use(auth)
}

export default middleware
