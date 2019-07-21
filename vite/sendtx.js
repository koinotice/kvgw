const { WS_RPC } = require('@vite/vitejs-ws');
const { client, hdAccount, utils, constant } = require('@vite/vitejs');

let { Vite_TokenId } = constant;

let myClient = new client( new WS_RPC("wss://premainnet.vitewallet.com/test/ws") );
let myHdAccount = new hdAccount({
    client: myClient,
    mnemonic: 'grief judge food scatter large wait auction another obscure nut wink beyond category glass kit cheese session pottery fit interest bomb obvious horror observe'
});

let firstAccount = myHdAccount.getAccount({
    index: 0
});

//console.log(Vite_TokenId)
firstAccount.sendTx({
    toAddress: 'vite_f4c39830a39c87dcb63867cd7d6ab6cb9ef82824ef620d287f',
    amount: '11111999999999999999999',    // 10Vite + 18个0
    tokenId: "tti_d7d6d5fe81d5f8c69d9c6e17"
}).then((accountBlock) => {
    console.log(accountBlock);
}).catch((err) => {
    console.log(err);
});
