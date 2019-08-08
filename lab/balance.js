const  Web3=require('web3') ;
const  Web4=require('eth-balance-checker/lib/web3') ;



const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cabc724fb9534d1bb245582a74ccf3e7"));
const address = '0x79DA3Ab727115cF437c137D9db7A9527ea484c29';
const tokens = ['0x0', '0x8a88f04e0c905054d2f33b26bb3a46d7091a039a'];
Web4.getAddressBalances(web3, address, tokens).then(balances => {
    console.log(balances); // { "0x0": "100", "0x456...": "200" }
});
