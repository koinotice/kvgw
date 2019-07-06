var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/hdkey')
var util = require('ethereumjs-util')

for(var i=0;i<100;i++){
    var mnemonic = bip39.generateMnemonic()
    console.log(mnemonic )
}


//
// var seed = bip39.mnemonicToSeed(mnemonic)
// var hdWallet = hdkey.fromMasterSeed(seed)
// var key1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
// var address1 = util.pubToAddress(key1._hdkey._publicKey, true)
//
// console.log(mnemonic,seed,key1,address1)
