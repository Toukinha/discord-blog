import { Request, Response } from 'express'
import CreateAccessService from '../service/CreateAccess.service'

export default class CreateAccess {
  constructor(private createAcess = new CreateAccessService()) {}
  handle = async (req: Request, res: Response) => {
    const { name } = req.body

    const response = await this.createAcess.addAccess({ name })

    return res.status(201).json(response)
  }
}
