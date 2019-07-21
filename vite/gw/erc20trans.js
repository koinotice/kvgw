const {sendTokens} = require('send-tokens');
// Address of token contract.
const TOKEN_ADDRESS = '0xbeaad2b3f074fa6dabcb17ffc6044e1627828637';
// Recipient of tokens.
//const RECIPIENT = '0xeab852b92a8992c971fe015c01b6195e32c3d98b';
const RECIPIENT = '0x924c1f12d6ac920d20feb9c58cdc1c0b4733eb0d';

// Sending wallet's private key.
const PRIVATE_KEY = 'F02F364A8E58A573D7852955555E6533372ED9F6006760A3243DC953C3F5DB9C';
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
