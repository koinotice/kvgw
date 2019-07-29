const eachLimit = require('async/eachLimit')
const Leven = require('./leven')
const leven = new Leven({

    wallet: {

        // donkey safe jacket common label rural baby sort project mandate response disease

        mnemonic: 'amount steak fancy receive solid deny amazing monster inhale later alert electric',
        address_index: 0,
        num_addresses: 21,
        //options: {wallet_hdpath: 'm/44\'/60\'/12580\'/1000'}
        options: {wallet_hdpath: 'm/44\'/60\'/0\'/0/'}

    }
})
const {Nats} = require('./nats')
const {WS_RPC} = require('@vite/vitejs-ws');
const {client} = require('@vite/vitejs');
const {LangList} = constant;

import {constant, hdAddr, account} from '@vite/vitejs';

async function main1() {
    await leven.start()
    //console.log(leven.addresses)
    var i = 0;

    //const viteWallets = hdAddr.getAddrsFromMnemonic("example monitor sample spot chase pigeon crouch adult spend submit window under name purity anger dry kiwi update hub trigger twist gasp awake connect", 0, 100, LangList.english)
    var address = []
    leven.accounts.forEach(wallet => {
       // wallet.ViteAddress = viteWallets[i++].hexAddr
        console.log(wallet, "\n")
        //address.push(wallet.Address)
        Nats.publish("pmker.wallet.create", wallet)

    })
  //  console.log(address)


    //console.log(leven.accounts)

}
async function main(){
    Nats.publish("pmker.send.eth")
    // Nats.publish("pmker.send.erc20",{
    //     TokenAddress:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b"
    // })



}


async function sendEth(){
    await leven.start()
   const ac=(leven.accounts[0])
    var i = 0;

    //const viteWallets = hdAddr.getAddrsFromMnemonic("example monitor sample spot chase pigeon crouch adult spend submit window under name purity anger dry kiwi update hub trigger twist gasp awake connect", 0, 100, LangList.english)
    var address = []
    const pk=leven.accounts[0].Pk;
    leven.accounts.pop()

    leven.accounts.forEach(wallet => {

        let msg={
            Type:"sendeth",
            Prinkey: pk,
            TokenAddress:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b",
            Value: "10000",
            ToAddress: wallet.Address
        }

        let msg2={
            Type:"senderc20",
            Prinkey: wallet.Pk,
            TokenAddress:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b",
            Value: "20",
            ToAddress: ac.Address
        }

        // let msg1={
        //     Type:"senderc20",
        //     Prinkey: "74a69ae5f26a42ff012bb4f79cc1046c0d3d5bc7d4e53b3822915df42c2cb784",
        //     TokenAddress:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b",
        //     Value: "100",
        //     ToAddress: wallet.Address
        // }

        // console.log(msg)
        // console.log(ac)

         Nats.publish("pmker.send.erc20",msg2 )
        // Nats.publish("pmker.send.eth",msg )

    })

    // address.forEach(v=>{
    //     Nats.publish("pmker.send.eth",{
    //         Prinkey:"9A82ACCBC285082EEBDE4A69249738B5AEDCCB2008E14D2591BD0801DE695515",
    //         Value:"0.02",
    //         ToAddress:v
    //     })
    // })
    const delay = time => new Promise(res=>setTimeout(()=>res(),time));

    // for(var i=0;i<5;i++){
    //     Nats.publish("pmker.send.eth",{
    //         Prinkey:"AFF0707EE1205B85FD16214C89B6A75FD50F820EA96A40984E785E76133454D0",
    //         Value:(0.001+i).toString(),
    //         ToAddress:"0x1869cec5b0464b490941b59423ce0df8885c7fcd"
    //     })
    //     delay(5000)
    // }


    /*
    4C7AD49703E3D10FC7D9042CCFCDD629648D89902CFF4E8CCC450E05BA8E2926
AFF0707EE1205B85FD16214C89B6A75FD50F820EA96A40984E785E76133454D0

     */
    // Nats.publish("pmker.send.ethall",{
    //     Prinkey:"AFF0707EE1205B85FD16214C89B6A75FD50F820EA96A40984E785E76133454D0",
    //     Value:"0.006",
    //     //ToAddress:"0x1869cec5b0464b490941b59423ce0df8885c7fcd"
    // })

    // var a=0;
    // for(var i=1;i<=100;i++) {
    //     let msg={
    //         Type:"sendeth",
    //         Prinkey: "7fc400b64df2b5b683d54769004aee958837f2f83eabac9bc44931a2599f9986",
    //         Value: parseFloat(i).toString(),
    //         ToAddress: "0x46c6fd9Ed2d7141bc54888c9684642971dFE8451"
    //     }
    //     a=a+i;
    //
    //     console.log(msg)
    //      Nats.publish("pmker.send.eth",msg )
    // }
    //
    // var a=0;
    // for(var i=1;i<=53;i++) {
    //     let msg={
    //         Type:"senderc20",
    //         Prinkey: "e37589a4cb62605a8a651ddcf39c73bea41b6e536bf63e5628494cfa1a637996",
    //         TokenAddress:"0xc246b4da903ae8a7de212a3ed6e3353cdb98602b",
    //         Value: parseFloat(i).toString(),
    //         ToAddress: "0x8EAAFf2852EFC1722c701c556d1D4ab8A0a6D930"
    //     }
    //     a=a+i;
    //
    //     console.log(msg)
    //      Nats.publish("pmker.send.erc20",msg )
    // }
    //
    // console.log(a)




}

 //main1()
sendEth()
