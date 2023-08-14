import { Posts } from '@prisma/client'
import { prisma } from '../prisma/client'

import AppError from '../erros/AppErrors'

export default class FindPost {
  async findPost(): Promise<Posts[]> {
    const post = await prisma.posts.findMany()

    return post
  }
}
