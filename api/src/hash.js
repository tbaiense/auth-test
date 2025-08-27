const { 
    randomBytes,
    pbkdf2Sync
 } = require('node:crypto')
const { Buffer } = require('node:buffer')

async function hash(password, salt) {
    const iterations = 1000
    const keylen = 16 // gera 32 caracteres uma vez convertido para hexadecimal
    const digest = 'sha512'
    
    const derivedKey = pbkdf2Sync(password, Buffer.from(salt, 'hex'), iterations, keylen, digest)
    return derivedKey.toString('hex')        
}

exports.hash = hash