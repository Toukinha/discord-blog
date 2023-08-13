import * as bcrypt from 'bcryptjs'

export default class Bcrypt {
  code(password: string): Promise<string> {
    const hash = bcrypt.hash(password, 10)
    return hash
  }

  compare(password: string, hash: string): boolean {
    const compare = bcrypt.compareSync(password, hash)
    return compare
  }
}
