import { Request, Response } from 'express'
import FindPostService from '../service/FindPost.service'

export default class FindPost {
  constructor(private findPostService = new FindPostService()) {}

  find = async (req: Request, res: Response) => {
    const findPost = await this.findPostService.findPost()

    return res.json(findPost)
  }
}
