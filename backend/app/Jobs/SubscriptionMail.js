'use strict'

const Mail = use('Mail')
const moment = require('moment')

class SubscriptionMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SubscriptionMail-job'
  }

  // This is where the work is done.
  async handle ({ email, username, title, where, when }) {
    const date = moment(when).format('DD/MM/YYYY')
    const time = moment(when).format('HH:mm')

    await Mail.send(
      ['emails.meetup_subscription'],
      { username, title, where, date, time },
      message => {
        message
          .to(email)
          .from('meetapp@meetapp.com.br', 'Meetapp')
          .subject('MeetApp - Confirmação de Inscrição')
      }
    )
  }
}

module.exports = SubscriptionMail
