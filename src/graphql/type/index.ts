import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'

const typesArray = loadSchemaSync(path.join(__dirname, '/*.gql'), {
    loaders: [new GraphQLFileLoader()],
})

const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs
