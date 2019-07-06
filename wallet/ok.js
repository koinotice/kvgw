const eachLimit = require('async/eachLimit')
const Leven = require('./leven')
const leven = new Leven({

    wallet: {
        mnemonic: 'yellow margin dose great blush regular best buyer detect fence exhaust tiger',
        address_index: 0,
        num_addresses: 1000,
        options: {wallet_hdpath:'m/44\'/60\'/12580\'/1000'}

    }
})

async function main(){
    await leven.start()
    //console.log(leven.addresses)
    leven.addresses.forEach(address=>{
        console.log(address)
        console.log(" ")
    })
   //console.log(leven.accounts)

}
main()
