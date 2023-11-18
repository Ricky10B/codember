const fs = require('node:fs/promises')
const { countWords } = require('./challenge')

const resExpected = 'murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7'

describe('Reto 1', () => {
  it('solución igual al resultado esperado', async () => {
    const message = await fs.readFile('./reto1/message.txt', 'utf-8')

    const res = countWords(message)

    expect(res).toBe(resExpected)
  })
})
