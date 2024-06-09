import { IResolvers } from '@graphql-tools/utils'
import UserService from '../../service/userService'

const userResolvers: IResolvers = {
    Query: {
        user: async (_, { id }) => {
            try {
                console.log(id)
                return
            } catch (error) {}
        },
    },
    Mutation: {
        register: async (_, args) => {
            const userService = new UserService(args)
            return await userService.register()
        },
        login: async (_, args) => {
            const userService = new UserService(args)
            return await userService.login()
        },
    },
}

export default userResolvers
