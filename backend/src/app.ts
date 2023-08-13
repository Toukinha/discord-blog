import 'express-async-errors'
import express from 'express'
import userRouter from './routes/User.routes'
import accessRouter from './routes/Access.routes'

const app = express()

app.use(express.json())

app.use('/register', userRouter)
app.use('/access', accessRouter)

export default app
