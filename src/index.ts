import * as figlet from 'figlet';
import { Command } from 'commander';

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
  .parse(process.argv);

const options = cli.opts();
if (!process.argv.slice(2).length) {
  cli.outputHelp();
}

// logs and other functionalities
