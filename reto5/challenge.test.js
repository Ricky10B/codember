const fs = require('fs/promises')
const { revisionUser } = require('./challenge')

const resExpected = 'youh4v3beenpwnd'

describe('Reto 5', () => {
  test('Respuesta formada por el primer caracter del username de los usuarios incorrectos', async () => {
    const msg = await fs.readFile('./reto5/message.txt', 'utf-8')

    expect(revisionUser(msg)).toBe(resExpected)
  })
})
