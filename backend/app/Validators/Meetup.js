'use strict'

const Antl = use('Antl')

class Meetup {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      where: 'required',
      when: `required|date|after:${new Date()}`,
      file_id: 'required|integer',
      preferences: 'required|array'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Meetup
