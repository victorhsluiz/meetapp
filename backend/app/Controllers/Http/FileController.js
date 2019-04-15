'use strict'

const File = use('App/Models/File')

class FileController {
  async store ({ request, response }) {
    try {
      const { filename, name, type, subtype } = request.only([
        'filename',
        'name',
        'type',
        'subtype'
      ])

      const file = await File.create({
        file: filename,
        name,
        type,
        subtype
      })

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload do arquivo' } })
    }
  }

  async show ({ params }) {
    const file = await File.findOrFail(params.id)

    return file
  }
}

module.exports = FileController
