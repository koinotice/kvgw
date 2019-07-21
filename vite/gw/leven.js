const bip39 = require('bip39')
const ethJSWallet = require('ethereumjs-wallet')
const hdkey = require('ethereumjs-wallet/hdkey')


class Leven {
    constructor({wallet}) {
        const that = this
        this.addresses = []
        this.wallets = []

        this.wallet = wallet




    }

    async start() {
        await this.HDWallet(this.wallet)
    }


    async HDWallet({
                       mnemonic,
                       address_index,
                       num_addresses,
                       options
                   }) {

        let wallet_hdpath = typeof options.wallet_hdpath != 'undefined' ? options.wallet_hdpath : 'm/44\'/60\'/0\'/0/'



        if ((mnemonic && mnemonic.indexOf(' ') === -1) || Array.isArray(mnemonic)) {
            const privateKeys = Array.isArray(mnemonic) ? mnemonic : [mnemonic]
            this.wallets = {}
            this.addresses = []
            this.accounts = []

            for (let i = address_index; i < address_index + num_addresses; i++) {
                const privateKey = Buffer.from(privateKeys[i].replace('0x', ''), 'hex')
                if (ethUtil.isValidPrivate(privateKey)) {
                    const wallet = ethJSWallet.fromPrivateKey(privateKey)
                    const address = wallet.getAddressString()
                    this.addresses.push(address)
                    this.wallets[address] = wallet
                    this.accounts.push('0x' + wallet.getPrivateKey().toString('hex'))
                }
            }
        } else {
            const cc = await bip39.mnemonicToSeed(mnemonic)

            this.hdwallet = hdkey.fromMasterSeed(cc)
            this.wallet_hdpath = wallet_hdpath
            this.wallets = {}
            this.addresses = []
            this.accounts = []

            if (!bip39.validateMnemonic(mnemonic)) {
                throw new Error('Mnemonic invalid or undefined')
            }

            for (let i = address_index; i < address_index + num_addresses; i++) {
                const wallet = this.hdwallet
                    .derivePath(this.wallet_hdpath + i)
                    .getWallet()
                const addr = '0x' + wallet.getAddress().toString('hex')

                const obj={
                    Address:addr.toLocaleLowerCase(),
                    Index:i,
                    Pk:'0x' + wallet.getPrivateKey().toString('hex')
                }
                this.addresses.push(addr)
                this.wallets[addr] = wallet
                this.accounts.push(obj)
            }
        }
        // console.log(this.addresses)
        //console.log(this.addresses)
    }

}

module.exports = Leven
