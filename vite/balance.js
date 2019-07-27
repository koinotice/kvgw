import WS_RPC from '@vite/vitejs-WS';
import {client, constant, account,hdAccount} from '@vite/vitejs';

import sendTx from "./utils/sendTx";

const {methods} = constant;
const wsProvider = new WS_RPC("wss://premainnet.vitewallet.com/test/ws");

const myClient = new client(wsProvider, function (_myclient) {
    console.log("Connected.");
});

// vite_512a50000f53c2aeb913f206cf9ee107a850e9f3f72caed6d4
// 7aaeaddd27a2ccb468976c5c42702c1fa990c28de987b3010f378b859e2de705fa65ed3b349471f58388308fda141b4638baf1ed2509f78f647a0c5c1378a1fc

const address = 'vite_7ffd411655a58926090b86456b2a65096ded73f7065f9f0c09';
const address1 = 'vite_f4c39830a39c87dcb63867cd7d6ab6cb9ef82824ef620d287f';

 //
setInterval(()=>{
    myClient.request('testapi_getTestToken',  address).then((a) => {
        console.log(a)
    }).catch(err => {
        console.warn(err);

    });
    //
    // myClient.getBalance(address).then((data) => {
    //     console.log(data );
    //      console.log(data.balance.tokenBalanceInfoMap);
    //     // console.log(data.onroad.tokenBalanceInfoMap);
    // });

    myClient.getBalance(address).then((data) => {
        console.log(data );
         console.log(data.balance.tokenBalanceInfoMap);
       //console.log(data.onroad.);
    });
},3000)

// myClient.getTxList(address).then(data=>{
//
//     console.log(data)
//
// })
// let myHdAccount = new hdAccount({
//     client: myClient,
//     mnemonic: 'vehicle beyond prepare icon useful letter write fee use rent primary either often nest lesson infant crop name shine unfold affair ketchup valve medal\n'
// });
//
// let myAccount = myHdAccount.getAccount({
//     index: 0
// });
// let myAccount = new account({
//     client: myClient,
//     privateKey: '7aaeaddd27a2ccb468976c5c42702c1fa990c28de987b3010f378b859e2de705fa65ed3b349471f58388308fda141b4638baf1ed2509f78f647a0c5c1378a1fc'
// });
//
// myAccount.getTxList({
//     index: 0,
//     pageCount: 3
// }).then((data) => {
//     let txList = data.list || [];
//     console.log(txList);
// });
//
//
//
// myAccount.sendTx({
//     toAddress: 'vite_4e3967e61321354f8915662e9ceac3d6820672f47a22454157',
//     amount: '6762000000000000000000',    // 10Vite + 18个0
//     tokenId: constant.Vite_TokenId
// }).then((accountBlock) => {
//     console.log(accountBlock);
// }).catch((err) => {
//     console.log(err);
// });
/*const methodName="voting"
myAccount.sendTx({
    methodName:"voting",
    toAddress: 'vite_0000000000000000000000000000000000000004d28108e76b',
    tokenId:"tti_5649544520544f4b454e6e40",
    nodeName: "s2",
    amount:10000000000,
    params: {




    },
}).then((accountBlock) => {
    console.log(accountBlock);
}).catch((err) => {
    console.log(err);
});*/
//


// sendTx('voting', {
//     nodeName: "s2",
//     tokenId: "tti_5649544520544f4b454e6e40"
// }, {
//     pow: true,
//     getActiveAcc: function () {
//         return myAccount
//     }
//
// }).then(e => {
//     console.log(e)
// }).catch(e => {
//     console.log(e)
// });

//
// sendTx('mintage', {
//     tokenName: "leven",
//     decimals: "18",
//     totalSupply: "12345000000000000000000",
//     tokenSymbol: "AK47",
//     isReIssuable: false,
//     maxSupply:0,
//     ownerBurnOnly: false,
// }, {
//     pow: true,
//     confirm:{operate:"asdf"},
//     getActiveAcc: function () {
//         return myAccount
//     }
//
// }).then(e => {
//     console.log(e)
// }).catch(e => {
//     console.log(e)
// });


// myAccount.getOnroadBlocks({
//     index: 0,
//     pageCount: 10
// }).then((data) => {
//     if (!data || !data.length) {
//         console.log('No onroad');
//         return;
//     }

//     // 接收第一笔交易
//     myAccount.receiveTx({
//         fromBlockHash: data[0].hash
//     }).then((accountBlock) => {
//         console.log(accountBlock);
//     });
// });
