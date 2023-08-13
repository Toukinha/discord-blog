import { Router } from 'express'
import CreateAccess from '../controller/CreateAccess.controller'

const accessRouter = Router()
const createAccess = new CreateAccess()

accessRouter.post('/', createAccess.handle)

export default accessRouter
