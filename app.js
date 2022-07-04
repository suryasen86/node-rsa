const NodeRSA = require('node-rsa');
const fs=require('fs')
let public_key=new NodeRSA(fs.readFileSync('./test_public.key'))
let private_key=new NodeRSA(fs.readFileSync('./test_private.key'))


let text="HEllo"

function main (){
    let hash=public_key.encrypt(text,'base64')
    console.log(hash)
    let decoded=private_key.decrypt(hash,'utf8')
    console.log(decoded)
}
main()
