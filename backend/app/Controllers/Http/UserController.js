'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, auth }) {
    const { name, email, password } = request.only([
      'name',
      'email',
      'password'
    ])

    const user = await User.create({ name, email, password })

    const token = await auth.attempt(email, password)

    return { user, ...token }
  }
}

module.exports = UserController
