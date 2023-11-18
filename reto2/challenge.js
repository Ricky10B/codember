function resolveCode (msg) {
  let num = 0
  let res = ''
  
  msg.split('').forEach(l => {
    if (l === '#') num++
    if (l === '@') num--
    if (l === '*') num *= num
    if (l === '&') res += num
  })

  return res
}

module.exports = {
  resolveCode
}
