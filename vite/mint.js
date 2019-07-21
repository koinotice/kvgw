import WS_RPC from '@vite/vitejs-WS';
import {client, constant, account} from '@vite/vitejs';
import sendTx from "./utils/sendTx";

const {methods} = constant;
const wsProvider = new WS_RPC("ws://localhost:41420");

const myClient = new client(wsProvider, function (_myclient) {
    console.log("Connected.");
});

// vite_512a50000f53c2aeb913f206cf9ee107a850e9f3f72caed6d4
// 7aaeaddd27a2ccb468976c5c42702c1fa990c28de987b3010f378b859e2de705fa65ed3b349471f58388308fda141b4638baf1ed2509f78f647a0c5c1378a1fc

//const address = 'vite_512a50000f53c2aeb913f206cf9ee107a850e9f3f72caed6d4';
let myAccount = new account({
    client: myClient,
    privateKey: '7aaeaddd27a2ccb468976c5c42702c1fa990c28de987b3010f378b859e2de705fa65ed3b349471f58388308fda141b4638baf1ed2509f78f647a0c5c1378a1fc'
});

const sendMint = () => {
    sendTx('mintage', {
        tokenName: "SETB",
        decimals: "18",
        totalSupply: "5432000000000000000000",
        tokenSymbol: "SET",
        isReIssuable: false,
        maxSupply: 0,
        ownerBurnOnly: false,
    }, {
        pow: true,
        confirm: {operate: "sure"},
        getActiveAcc: function () {
            return myAccount
        }

    }).then(e => {
        console.log(e)
    }).catch(e => {
        console.log(e)
    });

};

sendMint()
//
// sendTx('mintage', {
//     tokenName: "loop",
//     decimals: "18",
//     totalSupply: "12345000000000000000000",
//     tokenSymbol: "lrc",
//     isReIssuable: false,
//     maxSupply: 0,
//     ownerBurnOnly: false,
// }, {
//     pow: false,
//     confirm: {operate: "asdf"},
//     getActiveAcc: function () {
//         return myAccount
//     }
//
// }).then(e => {
//     console.log(e)
// }).catch(e => {
//     console.log(e)
// });


