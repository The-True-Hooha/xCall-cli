# Smart Contract Compatibility Checker CLI

## PS: THIS IS STILL ACTIVELY IN DEVELOPMENT SO YOU MIGHT ENCOUNTER A FEW BUGS

NOTE: The best way to run this project to is clone and run locally

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![npm](https://img.shields.io/badge/npm-package-blue.svg)](https://www.npmjs.com/package/xcall-validator)

## Overview

The Smart Contract Compatibility Checker CLI is a tool designed to validate smart contracts against multiple blockchain networks, ensuring compliance with each chain's specific requirements. It provides developers with a straightforward command-line interface to perform compatibility checks effortlessly.

## Features

- Validate smart contracts against supported blockchain networks.
- Check compatibility across multiple chains for contract compliance.
- Generate clear error messages for non-compliant contracts.
- Flexible options for specifying chains, output formats, and verbosity.

## Installation

### Prerequisites

- Node.js (version >= 12)
- npm (Node Package Manager)

### Installation Steps

1. can be installed from NPM with the command `npm i xcall-validator`

### Commands

- v: `<contract-file>`: Validates a smart contract against supported chains.

- c:`<contract-file>`: Checks compatibility for a smart contract against specified chains.

- l: `<Lists>` all supported blockchain networks.

- g: `<generate>` a wallet account

### Options

- --chains=`<chains>` or -c: Specify chains for validation/checking.

- --network=`<network>` or -n: Define the intended network for the contract.

- --output=`<format>` or -o: Output format for validation results.

- --verbose or -v: Enable verbose mode for detailed information.

- --ignore-warnings or -i: Skip warnings during validation.
- --wallet: generate a new wallet containing public and private keys
- --eoa-wallet: generate wallet from a private key
