const { WS_RPC } = require('@vite/vitejs-ws');
const { client } = require('@vite/vitejs');

import { keystore, constant, hdAddr, account } from '@vite/vitejs';
const { LangList } = constant;
//
// let provider = new WS_RPC("ws://localhost:41420");
// let myClient = new client(provider, (_myClient) => {
//     console.log("Connected");
// });
//
// // myClient.ledger.getSnapshotChainHeight().then((result) => {
// //     console.log(result);
// // }).catch((err) => {
// //     console.warn(err);
// // });
//
// myClient.getBalance("vite_1ee5dee237be723121f45ae23e6b906371b69fe6d1a0cff0ea").then(({balance, onroad}) => {
//     console.log(balance, onroad);
// }).catch(err => {
//     console.warn(err);
// });
//生成钱包助记词
// const ad=hdAddr.newAddr()
//
// console.log(ad)


const wallets=hdAddr.getAddrsFromMnemonic("grief judge food scatter large wait auction another obscure nut wink beyond category glass kit cheese session pottery fit interest bomb obvious horror observe",0,5,LangList.english)
//console.log(wallets)

//console.log("vite_aea392a2788e0b9b8a3ad68ba1f8baa716f4a426f1ddc7b35d")
wallets.forEach(wallet=>{
    console.log(wallet.hexAddr)
    console.log(wallet.privKey)

})


