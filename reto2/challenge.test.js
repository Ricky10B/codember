const fs = require('node:fs/promises')
const { resolveCode } = require('./challenge')

const resExpected = '024899455'

describe('Reto 2', () => {
  it('solución igual al resultado esperado', async () => {
    const messaege = await fs.readFile('./reto2/message.txt', 'utf-8')

    const res = resolveCode(messaege)

    expect(res).toBe(resExpected)
  })
})

