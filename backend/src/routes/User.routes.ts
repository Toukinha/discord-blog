import { Router } from 'express'
import CreateUser from '../controller/CreateUser.controller'

const userRouter = Router()
const createUser = new CreateUser()

userRouter.post('/', createUser.handle)

export default userRouter
