#! /usr/bin/env node
import * as figlet from 'figlet';
import { Command } from 'commander';
import { generateWallet, getEOAWallet } from './icon/wallet';

console.log(figlet.textSync('xCall-cli'));

const cli = new Command();
cli
  .version('1.0')
  .description(
    'a cross-chain application compatibility check with the xCall network',
  )
  .option('-l, --list [value]', 'list the available supported chains')
  .option(
    '-v, --validate <value>, validates a smart contract against or more supported chains',
  )
  .option('-c, --chain <value>, specify chains to validate against')
  .option(
    '-n, --network <value>, specify the network for which the contract is intended',
  )
  .option(
    '-o, --output <value>, define the output file format for the validation result(e.g., JSON, YAML, txt)',
  )
  .option(
    '-v, --verbose <value>, enable to provide more information during validation',
  )
  .option(
    '-i, --ignore <value>, skips warnings during validation, only displaying critical errors.',
  )
  .option(
    '-h, --help <value>, displays help information about the CLI and its available commands/options.',
  )
  .option(
    '-g, --generate <wallet>, generates a wallet address using the using icon-sdk-js',
  )
  .option(
    '-r, --recover <wallet>, generates a wallet address using the using icon-sdk-js',
  )
  .parse(process.argv);

const options = cli.opts();
// Your imports and other code...

if (options.generate === 'wallet') {
  console.log('Are you sure you want to generate a new wallet (Y/N)');
  process.stdin.once('data', (input) => {
    const response = input.toString().trim();
    if (response.toLowerCase() === 'y') {
      console.log('generating new wallet data');
      generateWallet();
    } else {
      console.log('wallet generation cancelled');
    }
  });
} else if (options.recover === 'wallet') {
  console.log('Are you sure you want to recover an EOA? (Y/N)');
  process.stdin.once('data', (input) => {
    const confirmation = input.toString().trim();
    if (confirmation.toLowerCase() === 'y') {
      console.log('Please enter the private key for EOA recovery:');
      process.stdin.once('data', async (privateKeyInput) => {
        const privateKey = privateKeyInput.toString().trim();
        await getEOAWallet(privateKey);
      });
    } else {
      console.log('EOA recovery canceled.');
    }
  });
} else {
  console.log("Invalid command. Use '-r wallet' to recover an EOA.");
}

if (!process.argv.slice(2).length) {
  cli.outputHelp();
}
