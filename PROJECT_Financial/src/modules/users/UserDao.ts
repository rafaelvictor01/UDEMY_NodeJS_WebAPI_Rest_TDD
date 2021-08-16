import { db } from '../../db'
import { IUser } from './IUser'

export const UserDao = {

  async findAll (): Promise<IUser[]> {
    return await db('users').select().then(allUsers => allUsers)
  },

  async create (user: IUser[]): Promise<IUser[]> {
    // esta forma de retorno funciona apenas para o pg
    const createdUsers: IUser[] = await db('users').insert(user, '*')
    return createdUsers
  }
}
