import { Router } from 'express'
import { IUser } from './IUser'
import { UserService } from './UserService'

const userRoutes = Router()

userRoutes.get('/users', async (req, res) => {
  const users = await UserService.getUsers()
  return res.status(201).json(users)
})

userRoutes.post('/users', async (req, res) => {
  const createdUsers = await UserService.createUsers(req.body as IUser[])
  return res.status(201).json(createdUsers)
})

export { userRoutes }
