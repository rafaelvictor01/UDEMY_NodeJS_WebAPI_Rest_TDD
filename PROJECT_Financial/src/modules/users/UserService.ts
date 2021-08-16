import { UserDao } from './UserDao'
import { IUser } from './IUser'

export const UserService = {
  async getUsers (): Promise<IUser[]> {
    return await UserDao.findAll()
  },

  async createUsers (req: IUser[]): Promise<IUser[] | undefined> {
    try {
      const createdUsers: IUser[] = await UserDao.create(req)
      return createdUsers
    } catch (err) {
      console.error('Erro ao criar usuário', err)
    }
  }
}
