import express from 'express'
import { userRoutes } from './modules/users/UserRoutes'
import { genericRoutes } from './routes'

const app = express()

app.use(express.json())
app.use(genericRoutes)
app.use(userRoutes)

export { app }
