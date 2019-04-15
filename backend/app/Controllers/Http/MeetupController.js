'use strict'

const Meetup = use('App/Models/Meetup')
const MeetupSubscription = use('App/Models/MeetupSubscription')

class MeetupController {
  async store ({ request, response, auth }) {
    const user = auth.user.id

    const { preferences, ...data } = request.only([
      'title',
      'description',
      'where',
      'when',
      'file_id',
      'preferences'
    ])

    const meetup = await Meetup.create({ ...data, user_id: user })

    await MeetupSubscription.create({
      meetup_id: meetup.id,
      user_id: user
    })

    await meetup.load('subscriptions')

    if (preferences) {
      await meetup.preferences().attach(preferences)
      await meetup.load('preferences')
    }

    return meetup
  }

  async show ({ params }) {
    const meetup = await Meetup.findOrFail(params.id)

    const subscriptions = await meetup.subscriptions().fetch()
    const totalSubscriptions = subscriptions.rows.length

    return { meetup, totalSubscriptions }
  }
}

module.exports = MeetupController
