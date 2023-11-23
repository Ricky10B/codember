function resolveCode (msg, numPass) {
  return msg
    .split('\n')
    .reduce((invalidPass, str) => {
      const [sequence, password] = str.split(': ')
      const [numbers, letter] = sequence.split(' ')
      const [min, max] = numbers.split('-')
      const totalCount = password.split(letter).length - 1

      if (totalCount < Number(min) || totalCount > Number(max)) {
        invalidPass.push(password.trim())
      }

      return invalidPass
    }, [])
    .at(numPass - 1)
}

module.exports = {
  resolveCode
}
