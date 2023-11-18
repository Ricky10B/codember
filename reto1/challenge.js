function countWords (msg) {
  const pals = msg.split(' ').reduce((cont, pal) => {
    if (cont[pal]) cont[pal]++
    else cont[pal] = 1
    return cont
  }, {})
  
  return Object.entries(pals)
    .map(p => p.join(''))
    .join('')
}

module.exports = {
  countWords
}
