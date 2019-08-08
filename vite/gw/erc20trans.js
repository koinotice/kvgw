const {sendTokens} = require('send-tokens');
// Address of token contract.
const TOKEN_ADDRESS = '0xbeaad2b3f074fa6dabcb17ffc6044e1627828637';
// Recipient of tokens.
//const RECIPIENT = '0xeab852b92a8992c971fe015c01b6195e32c3d98b';
const RECIPIENT = '0xb393d99e3b0a8260b34100632a295d70199c4a7c';

// Sending wallet's private key.
const PRIVATE_KEY = '84152329CD53F7495DF7DA3C1384B4657CB9C0054E8A287EBDF71C23B938608B';
// Send 100 WHOLE tokens of tokens to someone using a private key and wait for
// it to be mined.
async function main(){
    let receipt = await sendTokens(TOKEN_ADDRESS, RECIPIENT, '12345',
        {key: PRIVATE_KEY, network: 'rinkeby'});

    console.log(receipt)
}

main()

//
// // Sending wallet's mnemonic.
// const MNEMONIC = 'butter crepes sugar flour eggs milk ...';
// // Send 100.312 WHOLE tokens to someone using a (BIP39) mnemonic phrase
// // and wait for it to be mined and confirmed 3 times.
// receipt = await sendTokens(TOKEN_ADDRESS, RECIPIENT, '100.312',
//     {mnemonic: MNEMONIC, confirmations: 3});
//
// // Sending wallet's keystore file contents as a string.
// const KEYSTORE = '{...}';
// // Keystore password.
// const PASSWORD = 'secret';
// // Send 32 of the smallest unit of tokens to someone using a keystore file,
// // print the transaction ID when it's available, and wait for it to be mined.
// receipt = await sendTokens(TOKEN_ADDRESS, RECIPIENT, '32', {
//     keystore: KEYSTORE,
//     password: PASSWORD,
//     decimals: 0,
//     onTxId: console.log
// });
