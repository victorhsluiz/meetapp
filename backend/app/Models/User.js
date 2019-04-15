'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  preferences () {
    return this.belongsToMany('App/Models/Preference').pivotModel(
      'App/Models/UserPreference'
    )
  }

  meetups () {
    return this.belongsToMany('App/Models/Meetup')
  }

  subscriptions () {
    return this.hasMany('App/Models/MeetupSubscription')
  }
}

module.exports = User
