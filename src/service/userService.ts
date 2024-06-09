import type { IUser } from '../interface/IUser'
import { ApolloError } from 'apollo-server-express'
import UserModel from '../model/userModel'
import { SHA256 } from 'crypto-js'

class UserService {
    private _user: IUser
    constructor(user: IUser) {
        this._user = user
        this._user.password = SHA256(
            this._user.username + this._user.password
        ).toString()
    }

    public get User() {
        return this._user
    }

    async register() {
        try {
            const userModel = new UserModel(this._user)
            await userModel.save()
            this._user = userModel as IUser
        } catch (error) {
            throw new ApolloError('Tài khoản đã tồn tại !')
        }
        return this._user
    }
    async login() {
        try {
            const userModel = await UserModel.findOne({
                password: this._user.password,
            })
            if (!userModel) {
                throw new ApolloError('Mật khẩu sai')
            }
            return userModel as IUser
        } catch (error) {
            throw error
        }
    }
}
export default UserService
