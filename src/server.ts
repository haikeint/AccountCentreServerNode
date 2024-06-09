import express from 'express'
import apolloServer from './graphql'

import middleware from './middleware'
import route from './route'

const app = express()

const runServer = () => {
    middleware(app)
    route(app)

    apolloServer.start().then(() => {
        apolloServer.applyMiddleware({ app })
        app.listen({ port: process.env.PORT }, () => {
            console.log(
                `Server ready at http:localhost:${process.env.PORT}${apolloServer.graphqlPath}`
            )
        })
    })
}

export default runServer
