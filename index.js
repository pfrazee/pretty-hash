
module.exports = function prettyHash (buf) {
  if (Buffer.isBuffer(buf)) {
    buf = buf.toString('hex')
    if (buf.length > 8) return buf.slice(0, 6) + '..' + buf.slice(-2)
  }
  return buf
}