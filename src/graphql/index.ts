import { ApolloServer } from 'apollo-server-express'
import typeDefs from './type'
import resolvers from './resolver'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        test: '123',
    }),
    formatError: (error) => {
        if (process.env.DEBUG == String(true)) return error
        return {
            message: error.message,
        }
    },
})

export default apolloServer
