'use strict'

const Meetup = use('App/Models/Meetup')
const MeetupSubscription = use('App/Models/MeetupSubscription')
const Kue = use('Kue')
const Job = use('App/Jobs/SubscriptionMail')

class MeetupSubscriptionController {
  async store ({ response, auth, params }) {
    const user = auth.user.id
    const meetup = await Meetup.findOrFail(params.id)

    const subscribed = await MeetupSubscription.query()
      .where('meetup_id', meetup.id)
      .where('user_id', user)
      .fetch()

    if (subscribed.rows.length) {
      return response.status(401).send({
        error: {
          message: 'Você já está inscrito neste meetup'
        }
      })
    }

    await MeetupSubscription.create({
      meetup_id: meetup,
      user_id: user
    })

    Kue.dispatch(
      Job.key,
      {
        email: auth.user.email,
        username: auth.user.name,
        title: meetup.title,
        where: meetup.where,
        when: meetup.when
      },
      { attempts: 3 }
    )

    return response.status(200).send()
  }

  async destroy ({ request, response, auth, params }) {
    const user = auth.user.id
    const meetup = params.id

    const subscribed = await MeetupSubscription.query()
      .where('meetup_id', meetup)
      .where('user_id', user)
      .fetch()

    if (subscribed.rows.length) {
      await MeetupSubscription.query()
        .where('meetup_id', meetup)
        .where('user_id', user)
        .delete()
      return response.status(200).send()
    }
    return response.status(401).send()
  }
}

module.exports = MeetupSubscriptionController
