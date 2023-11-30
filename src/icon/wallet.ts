import IconService from 'icon-sdk-js';
import fs from 'fs';
import * as figlet from 'figlet';
import { WalletDetail } from './interface/wallet.interface';
import { customErrorHelper } from '../lib/error.helper';
const { IconWallet } = IconService;

const generateWallet = (): WalletDetail | void => {
  figlet.text('Generating Wallet Address', (err, data) => {
    if (err) {
      console.error('cli error:', err);
      return;
    }
    console.log(data);
    // generate Wallet
    const wallet = IconWallet.create();
    const getWallet: WalletDetail = {
      address: wallet.getAddress(),
      privateKey: wallet.getPrivateKey(),
      publicKey: wallet.getPublicKey(),
    };
    // Display Wallet Details

    //   console.log(`your wallet address: ${getWallet.address}`);
    //   console.log(`your wallet private Key: ${getWallet.privateKey}`);
    //   console.log(`your wallet public Key: ${getWallet.publicKey}`);
    //   console.log('please keep your keys safe')

    const filePath = 'wallet-details.json';
    fs.writeFileSync(filePath, JSON.stringify(getWallet, null, 2));
    console.log(`generated wallet details and saved to ${filePath}`);
    return getWallet;
  });
};

generateWallet();

async function getEOAWallet(privatekey: string) {
  try {
    const getPrivateKey = IconWallet.loadPrivateKey(privatekey);
    const getWallet: WalletDetail = {
      address: getPrivateKey.getAddress(),
      privateKey: getPrivateKey.getPrivateKey(),
      publicKey: getPrivateKey.getPublicKey(),
    };
    const keyStoreObj = getPrivateKey.store('qwer1234');

    const filePath = 'EOAwallet.json';
    const objFilePath = 'key-store.json';
    console.log('writing to file');
    fs.writeFileSync(filePath, JSON.stringify(getWallet, null, 2));
    fs.writeFileSync(objFilePath, JSON.stringify(keyStoreObj, null, 2));
  } catch (error: any) {
    // write an error helper
    return customErrorHelper(error);
  }
}
