require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace seek surge trip notice crime remain mistake hockey sister army gather'; 
let testAccounts = [
"0xe04d8d9cc574e974c2ff8f97c46b23a49c79855af4eaa894b373641a0d01a415",
"0x09a39e65340fe18e5c45dee701bf895fe350d58db526afaadc03cd7e9682061a",
"0xd90d6620ca915112a266b975dfccf716470a8d8a7cab875546a246c2d9005afc",
"0x3258ef75f85955e7f9360b99e00d9687bd19cebb8967699e4f4bb26acc98b7ea",
"0x8ac9149f1ddcb861ca72b0f8207663bfefc7c212787ad9bc3369deb61ba285f7",
"0xb8c4f20d6c39a9e41d291fcec4f543dfd24fbb574c8b34ab0af42e1cf0a3415a",
"0x49c6df8de3b9b374f239715d2522d0f10d83569e6f0257be96743f571f6eba34",
"0x4ad645626c48ceac9d22c4fab5cca7479f5f6b6a037903a1581f1a3f3f8b169c",
"0x496cb45e6198e6ba2d8570d7e8aa15fc677f3d3f2f7f6c28943803544b9928e0",
"0xe09c82c65c0cff5b7fc1e58d6ea0ecc58609947716ad67aefaec4713d58002ca"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

