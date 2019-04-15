'use strict'

const Preference = use('App/Models/Preference')

class PreferenceSeeder {
  async run () {
    const preferences = [
      {
        title: 'Front-end'
      },
      {
        title: 'Back-end'
      },
      {
        title: 'Mobile'
      },
      {
        title: 'DevOps'
      },
      {
        title: 'Gestão'
      },
      {
        title: 'Marketing'
      }
    ]

    await Preference.createMany(preferences)
  }
}

module.exports = PreferenceSeeder
