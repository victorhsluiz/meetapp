'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, auth }) {
    const { username, email, password } = request.only([
      'username',
      'email',
      'password'
    ])

    const user = await User.create({ username, email, password })

    const token = await auth.attempt(email, password)

    return { user, ...token }
  }

  async show ({ auth }) {
    const user = await User.findOrFail(auth.user.id)

    await user.load('preferences')

    return user
  }

  async update ({ request, response, auth, params }) {
    const user = await User.findOrFail(params.id)

    if (auth.user.id !== user.id) {
      return response.status(401).send()
    }

    const { preferences, ...data } = request.only([
      'username',
      'password',
      'preferences'
    ])

    user.merge(data)
    await user.save()

    console.log(preferences)

    if (preferences) {
      await user.preferences().sync(preferences)
      await user.load('preferences')
    }

    return user
  }
}

module.exports = UserController
