const { WS_RPC } = require('@vite/vitejs-ws');
const { client, account, utils, constant } = require('@vite/vitejs');

let { Vite_TokenId } = constant;

let provider = new WS_RPC("wss://premainnet.vitewallet.com/test/ws");
let myClient = new client(provider);

let myAccount = new account({
    client: myClient,
    privateKey: 'your privateKey'   // Notice: privateKey 不是助记词，一个地址对应一个 privateKey
});

// 查询余额
myAccount.getBalance().then((result) => {
    console.log(result);
}).catch((err) => {
    console.warn(err);
});

// 请确保您的账户中有余额。因为发送交易时需要配额，可以选择首先抵押配额
myAccount.getQuota({
    toAddress: myAccount.address,
    tokenId: Vite_TokenId,
    amount: '134000000000000000000' // 至少 134 Vite
}).then((accountBlock) => {
    console.log(accountBlock);
});

// 获取交易列表
myAccount.getTxList({
    index: 0,
    pageCount: 50
}).then((data) => {
    let txList = data.list || [];
    console.log(txList);
});

// 发送交易
myAccount.sendTx({
    toAddress: 'Your toAddress',
    amount: '10000000000000000000',    // 10Vite + 18个0
    tokenId: Vite_TokenId
}).then((accountBlock) => {
    console.log(accountBlock);
}).catch((err) => {
    console.log(err);
});

// 获取在途交易列表
myAccount.getOnroadBlocks({
    index: 0,
    pageCount: 10
}).then((data) => {
    if (!data || !data.length) {
        console.log('No onroad');
        return;
    }

    // 当发现在途时，你可以开始接收交易
    myAccount.receiveTx({
        fromBlockHash: data[0].hash
    }).then((accountBlock) => {
        console.log(accountBlock);
    });
});
