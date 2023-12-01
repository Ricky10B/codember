const fs = require('fs/promises')
const { checksum } = require('./challenge')

const resExpected = 'O2hrQ-O2hrQ'

describe('Reto 4', () => {
  test('Checksum valido del archivo real número 33', async () => {
    const msg = await fs.readFile('./reto4/message.txt', 'utf-8')

    expect(checksum(msg)).toBe(resExpected)
  })
})
