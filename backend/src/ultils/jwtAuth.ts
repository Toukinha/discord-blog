import * as jwt from 'jsonwebtoken'

type Login = {
  email: string
  password: string
}

const secret = process.env.JWT_SECRET || 'Touka'

const createToken = (data: Login) =>
  jwt.sign({ ...data }, secret, { algorithm: 'HS256', expiresIn: '30D' })

const verifyToken = (token: string) => jwt.verify(token, secret)

export { createToken, verifyToken }
