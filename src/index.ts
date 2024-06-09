import config from './config'
import runServer from './server'

config()
    .then(() => {
        runServer()
    })
    .catch(() => {
        console.log('config fail !')
    })
