'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')
const Youch = use('youch')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }
    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request.request)
      const errorJson = await youch.toJSON()
      return response.status(error.status).send(errorJson)
    }
    return response.status(error.status).send()
  }
}

module.exports = ExceptionHandler
