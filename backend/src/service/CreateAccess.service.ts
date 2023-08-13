import { Access } from '@prisma/client'
import { prisma } from '../prisma/client'
import AppError from '../erros/AppErrors'

type AccessType = {
  name: string
}

export default class CreateAccess {
  async addAccess({ name }: AccessType): Promise<Access> {
    console.log(name, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    const accessAlreadyExists = await prisma.access.findUnique({
      where: {
        name,
      },
    })

    console.log('oi')

    if (accessAlreadyExists) {
      throw new AppError('Access already exists!', 402)
    }

    const access = await prisma.access.create({
      data: {
        name,
      },
    })
    return access
  }

  async getAll(): Promise<Access[]> {
    const getAllAccess = await prisma.access.findMany()
    return getAllAccess
  }
}
