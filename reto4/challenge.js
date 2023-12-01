function checksum (msg) {
  // respuesta rápida
  // return msg.split('\n')[32]

  // respuesta larga y correcta
  return msg.split('\n').filter(p => {
    const [pass, check] = p.split('-')
    
    const checkValid = pass.split('').reduce((cont, str, i) => {
      const newPass = pass.substring(0, i) + pass.substring(i + 1)
      if (!newPass.split('').includes(str)) cont.push(str)
      return cont
    }, []).join('')
    
    if (checkValid === check.trim()) return p
  }).at(32).trim()
}

module.exports = {
  checksum
}
