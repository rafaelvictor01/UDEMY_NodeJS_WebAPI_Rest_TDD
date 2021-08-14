import { Router } from 'express'

const genericRoutes = Router()

genericRoutes.get('/', (req, res) => {
  return res.status(201).send()
})

export { genericRoutes }
