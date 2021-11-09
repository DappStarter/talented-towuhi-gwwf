require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind mistake jazz prize bottom genius'; 
let testAccounts = [
"0x6a8259364544fc82c91dc1bad3dd8f494a742bb744030b222cf2e9282b4e7307",
"0x257b111e9d720a30a5f92a413b86707c86e23d27748f33d801b4f0ebbea57f4f",
"0x47de1e34ad120ea16747d84e88a02d90c0dabc8ec8f949ebd01d3d625ca1375a",
"0x7a9b0f5e5837d6ab0fa44257b35dff334e29f0abcb2ffd3474a858a18a2b53cf",
"0x38c6bd7a578140d8f0bbf8162146eea473baa525bc583db2621dd4478bbe025c",
"0xfb87ed08b80086f2c10accd73f1f00862328bc2ff1bcd3d35aa9ef80d7b9b68c",
"0x8658d975e974b349891792976210968c2bf5ab983c2c3910a0bba9fa387997d2",
"0xac0f7ae6f626bce88371f69f2ed38a28ca2bc6d2e1377c69f97723b369fb643b",
"0x14a8c580fb686be2eae162be913ddf69b797d4f0980daeb2cae228b7d18205de",
"0xee2a5e5977c0febff27b2b2f673ea347fc222b291c95ce037d5152ee302555b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

