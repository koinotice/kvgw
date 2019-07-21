const eachLimit = require('async/eachLimit')
const Leven = require('./leven')
const leven = new Leven({

    wallet: {

       // donkey safe jacket common label rural baby sort project mandate response disease

        mnemonic: 'yellow margin dose great blush regular best buyer detect fence exhaust tiger',
        address_index: 0,
        num_addresses: 5,
       //options: {wallet_hdpath: 'm/44\'/60\'/12580\'/1000'}
       options: {wallet_hdpath: 'm/44\'/60\'/0\'/0/'}

    }
})
const {Nats} = require('./nats')
const {WS_RPC} = require('@vite/vitejs-ws');
const {client} = require('@vite/vitejs');
const {LangList} = constant;

import {constant, hdAddr, account} from '@vite/vitejs';

async function main() {
    await leven.start()
    //console.log(leven.addresses)
    var i = 0;

    const viteWallets = hdAddr.getAddrsFromMnemonic("grief judge food scatter large wait auction another obscure nut wink beyond category glass kit cheese session pottery fit interest bomb obvious horror observe", 0, 5, LangList.english)
    var address=[]
    leven.accounts.forEach(wallet => {
        wallet.ViteAddress = viteWallets[i++].hexAddr
        console.log(wallet,"\n")
        address.push(wallet.Address)
        Nats.publish("vgw.wallet.create", wallet)

    })
    console.log(address)


    //console.log(leven.accounts)

}

main()
