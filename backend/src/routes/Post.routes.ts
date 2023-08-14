import { Router } from 'express'
import CreatePost from '../controller/CreatePost.controller'
import FindPost from '../controller/FindPost.controller'

const postRouter = Router()
const createPost = new CreatePost()
const findPost = new FindPost()

postRouter.post('/', createPost.handle)
postRouter.get('/', findPost.find)

export default postRouter
