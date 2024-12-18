
const crypto  = require( 'crypto')
const hdKey = require('hdkey')
function decrypt(s, password) {
    const parts = s.split(':')
    const salt = Buffer.from(parts.shift(), 'hex')
    const iv = Buffer.from(parts.shift(), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', hashPassword(password, salt), iv)
    const encryptedString = Buffer.from(parts.join(':'), 'hex')
    const decrypted = Buffer.concat([decipher.update(encryptedString), decipher.final()])
    return derivePrivateKey(0, decrypted.toString())
}

function derivePrivateKey(index, seed) {
    const key = hdKey.fromMasterSeed(Buffer.from(seed, 'hex')).derive("m/44'/60'/0'/0/" + index)

    return key.privateKey.toString('hex')
}

function hashPassword(password, salt) {
    try {
        return crypto.scryptSync(password, salt, 32, { N: 32768, r: 8, p: 1, maxmem: 36000000 })
    } catch (e) {
        console.error('Error during hashPassword', e) // TODO: Handle Error
    }
}
const main = async () => {
    const [encrypted, password] = process.argv.slice(2)
    console.log(decrypt(encrypted, password))
}

main().then(() => {process.exit(0)}).catch((e) => {console.log(e)})