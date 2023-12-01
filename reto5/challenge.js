function revisionUser(msg) {
  return msg.split('\n').map(n => {
    const [id, username, email, age, location] = n.split(',')
    
    const validId = id && id.match(/^\w+$/)
    const validUsername = username && username.match(/^\w+$/)
    const validEmail = email && email.match(/[\w+]{1,}@[a-zA-Z0-9]{1,}\.com/)
    const validAge = age || age.match(/^[0-9]$/)
    const validLocation = location || location.match(/^[a-zA-Z]$/)
    
    if (
      !validId || !validUsername || !validEmail ||
      !validAge || !validLocation
    ) return username[0]
    return ''
  }).join('')
}

module.exports = {
  revisionUser
}
