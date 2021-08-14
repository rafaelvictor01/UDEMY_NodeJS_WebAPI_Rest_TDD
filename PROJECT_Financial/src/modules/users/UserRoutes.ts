import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/users', (req, res) => {
  const users = [
    { name: 'Isa' }
  ]
  return res.status(201).json(users)
})

userRoutes.post('/users', (req, res) => {
  return res.status(201).json(req.body)
})

export { userRoutes }
