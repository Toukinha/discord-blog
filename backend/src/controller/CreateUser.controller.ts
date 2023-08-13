import { Request, Response } from 'express'
import CreateUserService from '../service/CreateUser.service'

export default class CreateUser {
  constructor(private createUserService = new CreateUserService()) {}

  handle = async (req: Request, res: Response) => {
    const { access, email, password } = req.body
    const response = await this.createUserService.addUser({
      access,
      email,
      password,
    })

    return res.status(201).json(response)
  }
}
