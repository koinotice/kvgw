const { WS_RPC } = require('@vite/vitejs-ws');
const { client, hdAccount, utils, constant } = require('@vite/vitejs');

let { Vite_TokenId } = constant;

let myClient = new client( new WS_RPC("ws://example.com") );
let myHdAccount = new hdAccount({
    client: myClient,
    mnemonic: 'your mnemonic'
});

let firstAccount = myHdAccount.getAccount({
    index: 0
});

firstAccount.sendTx({
    toAddress: 'Your toAddress',
    amount: '10000000000000000000',    // 10Vite + 18个0
    tokenId: Vite_TokenId
}).then((accountBlock) => {
    console.log(accountBlock);
}).catch((err) => {
    console.log(err);
});
