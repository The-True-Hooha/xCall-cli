import IconService from 'icon-sdk-js';
import fs from 'fs';
import * as figlet from 'figlet';
import { WalletDetail } from './interface/wallet.interface';
import { customErrorHelper } from '../lib/error.helper';
import { closeTerminal } from '../lib/close.terminal.helper';
const { IconWallet } = IconService;

export const generateWallet = (): Promise<WalletDetail> => {
  return new Promise((resolve, reject) => {
    figlet.text('Generating Wallet Address', (err, data) => {
      if (err) {
        console.error('cli error:', err);
        reject(err);
      } else {
        console.log(data);
        // Generate Wallet
        const wallet = IconWallet.create();
        const getWallet: WalletDetail = {
          address: wallet.getAddress(),
          privateKey: wallet.getPrivateKey(),
          publicKey: wallet.getPublicKey(),
        };
        const filePath = 'wallet-details.json';
        fs.writeFileSync(filePath, JSON.stringify(getWallet, null, 2));
        console.log(`Generated wallet details and saved to ${filePath}`);
        resolve(getWallet);
        closeTerminal()
      }
    });
  });
};

export async function getEOAWallet(privatekey: string){
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
    console.log(`recovered eoa wallet details and keystore`);
    closeTerminal()
  } catch (error: any) {
    console.log(customErrorHelper(error))
  }
}
