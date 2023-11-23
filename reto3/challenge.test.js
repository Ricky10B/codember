const fs = require('fs/promises')
const { resolveCode } = require('./challenge')

const resExpected = 'bgamidqewtbus'
const passSudo = 'nljzuyfzb'

describe('Reto 3', () => {
  let message
  beforeEach(async () => {
    message = await fs.readFile('./reto3/message.txt', 'utf-8')
  })

  test('Contraseña errónea número 42', () => {
    const res = resolveCode(message, 42)

    expect(res).toBe(resExpected)
  })
  
  test('Contraseña de administrador es la número 13', () => {
    const res = resolveCode(message, 13)
  
    expect(res).toBe(passSudo)
  })
})
