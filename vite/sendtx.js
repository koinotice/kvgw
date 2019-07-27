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
    toAddress: 'vite_38d2fb35b85ddf49664f04debf4a91f22c2134822ddff5c825',
    amount: '11999999999999999999',    // 10Vite + 18个0
    tokenId: "tti_a1e44974fd9223a604a549e2",
    data:"0xC41a4593A284C9E32D1F3e9101FB5067eC0b404d"
}).then((accountBlock) => {
    console.log(accountBlock);
}).catch((err) => {
    console.log(err);
});
