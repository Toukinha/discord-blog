import { Request, Response } from 'express'
import CreatePostService from '../service/CreatePost.service'

export default class CreatePost {
  constructor(private createPostService = new CreatePostService()) {}

  handle = async (req: Request, res: Response) => {
    const { title, picture, message, userId} = req.body
    const response = await this.createPostService.addPost({
        title,
        picture,
        message,
        userId
    })

    return res.status(201).json(response)
  }
}
