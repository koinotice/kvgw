const bip39 = require('bip39')
const ethJSWallet = require('ethereumjs-wallet')
const hdkey = require('ethereumjs-wallet/hdkey')


class Leven {
    constructor() {


    }

    async getAddress(mnemonic, index) {
        let wallet_hdpath = 'm/44\'/60\'/12580\'/1000'
        const cc = await bip39.mnemonicToSeed(mnemonic)

        this.hdwallet = hdkey.fromMasterSeed(cc)
        this.wallet_hdpath = wallet_hdpath


        if (!bip39.validateMnemonic(mnemonic)) {
            throw new Error('Mnemonic invalid or undefined')
        }

        const wallet = this.hdwallet
            .derivePath(this.wallet_hdpath + index)
            .getWallet()
        const addr = '0x' + wallet.getAddress().toString('hex')
        return {
            index:index,
            erc20address:addr,
            pk:'0x' + wallet.getPrivateKey().toString('hex')
        }

    }



}

module.exports = Leven
