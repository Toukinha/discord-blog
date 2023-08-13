import { User } from '@prisma/client'
import { prisma } from '../prisma/client'

import Bcrypt from '../ultils/bcrypt'
import AppError from '../erros/AppErrors'

type createUserType = {
  email: string
  password: string
  access: string
}

export default class CreateUser {
  async addUser({ email, password, access }: createUserType): Promise<User> {
    const bcrypt = new Bcrypt()
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (userAlreadyExists) {
      throw new AppError('User already exists!')
    }
    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.code(password),
        access: {
          connect: {
            name: access,
          },
        },
      },
    })
    return user
  }
}
