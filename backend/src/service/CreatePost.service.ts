import { Posts } from '@prisma/client'
import { prisma } from '../prisma/client'

import AppError from '../erros/AppErrors'

type createPosts = {
    title: string
    picture: string
    message: string
    userId: string
}

export default class CreatePost {
  async addPost({ title, picture, message, userId}: createPosts): Promise<Posts> {
    const post = await prisma.posts.create({
      data:{
        title,
        picture,
        message,
        User:{
          connect:{
            id: userId
          }
        }
        },
      })
    return post
  }
}
